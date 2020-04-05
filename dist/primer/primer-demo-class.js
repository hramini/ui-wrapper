"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PrimerDemo {
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
