"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unit_class_1 = require("./unit-class");
class UnitDemo extends unit_class_1.Unit {
    constructor() {
        super();
        this.elementText = 'test-provide';
    }
    provide() {
        const { elementText } = this;
        return { element: elementText };
    }
}
exports.UnitDemo = UnitDemo;
