"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unit_demo_class_1 = require("../unit/unit-demo-class");
class CustomDemoSimple extends unit_demo_class_1.UnitDemo {
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
