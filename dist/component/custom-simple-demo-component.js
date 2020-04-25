"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unit_class_1 = require("../unit/unit-class");
class CustomDemoSimple extends unit_class_1.Unit {
    constructor() {
        super();
        this.setProvideText({
            provideText: 'on-constructor'
        });
    }
    provide() {
        const { provideText: element } = this;
        return { element };
    }
    setProvideText(param) {
        const { provideText } = param;
        this.provideText = provideText;
    }
}
exports.CustomDemoSimple = CustomDemoSimple;
