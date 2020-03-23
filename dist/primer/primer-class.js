"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Primer {
    constructor(entry) {
        const { primer } = entry;
        this.entryPrimer = new primer();
    }
    getElement() {
        return { element: this.element };
    }
    setElement(param) {
        const { element } = param;
        this.element = element;
    }
    getTarget() {
        return { target: this.target };
    }
    setTarget(param) {
        const { target } = param;
        this.target = target;
    }
    start() {
        const { element } = this.getElement();
        const { target } = this.getTarget();
        this.entryPrimer.start({
            element,
            target
        });
    }
}
exports.Primer = Primer;
