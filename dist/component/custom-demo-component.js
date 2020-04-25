"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unit_class_1 = require("../unit/unit-class");
class CustomDemo extends unit_class_1.Unit {
    constructor() {
        super();
        this.setProvideText({
            provideText: 'on-constructor'
        });
        this.changeShouldUpdate({ status: true });
    }
    onBeforeProvide() {
        this.setProvideText({
            provideText: 'on-before-provide'
        });
    }
    onAfterProvide() {
        this.setProvideText({
            provideText: 'on-after-provide'
        });
    }
    onBeforeUpdate() {
        const { shouldUpdate } = this;
        this.setProvideText({
            provideText: 'on-before-update'
        });
        return { shouldUpdate };
    }
    onAfterUpdate() {
        this.setProvideText({
            provideText: 'on-after-update'
        });
    }
    onBeforeDispose() {
        this.setProvideText({
            provideText: 'on-before-dispose'
        });
    }
    forceUpdate() {
        this.setProvideText({
            provideText: 'force-update'
        });
    }
    provide() {
        const { provideText: element } = this;
        return { element };
    }
    changeShouldUpdate(param) {
        const { status } = param;
        this.shouldUpdate = status;
    }
    setProvideText(param) {
        const { provideText } = param;
        this.provideText = provideText;
    }
}
exports.CustomDemo = CustomDemo;
