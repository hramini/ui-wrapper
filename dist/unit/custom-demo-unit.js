"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unit_demo_class_1 = require("./unit-demo-class");
class CustomDemo extends unit_demo_class_1.UnitDemo {
    constructor() {
        super();
        this.provideText = 'on-constructor';
        this.changeShouldUpdate({ status: true });
    }
    onBeforeProvide() {
        this.provideText = 'on-before-provide';
    }
    onAfterProvide() {
        this.provideText = 'on-after-provide';
    }
    onBeforeUpdate() {
        this.provideText = 'on-before-update';
        return { shouldUpdate: this.shouldUpdate };
    }
    onAfterUpdate() {
        this.provideText = 'on-after-update';
    }
    onBeforeDispose() {
        this.provideText = '';
    }
    forceUpdate() {
        this.provideText = 'force-update';
    }
    provide() {
        return { element: this.provideText };
    }
    changeShouldUpdate(param) {
        const { status } = param;
        this.shouldUpdate = status;
    }
}
exports.CustomDemo = CustomDemo;
