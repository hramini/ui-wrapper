"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unit_demo_class_1 = require("./unit-demo-class");
class CustomDemoSimple extends unit_demo_class_1.UnitDemo {
    constructor() {
        super();
        this.provideText = 'on-constructor';
    }
    provide() {
        return { element: this.provideText };
    }
}
exports.CustomDemoSimple = CustomDemoSimple;
