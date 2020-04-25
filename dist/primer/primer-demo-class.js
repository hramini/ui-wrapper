"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unit_framework_demo_class_1 = require("../unit/framework-demo/unit-framework-demo-class");
class PrimerDemo {
    constructor() {
        this.unitPrototype = unit_framework_demo_class_1.UnitFramework.prototype;
    }
    getUnitPrototype() {
        const { unitPrototype } = this;
        return { unitPrototype };
    }
    setElement(param) {
        const { element } = param;
        this.element = element;
    }
    setTarget(param) {
        const { target } = param;
        this.target = target;
    }
    start() {
        this.target.innerHTML = this.element;
    }
}
exports.PrimerDemo = PrimerDemo;
