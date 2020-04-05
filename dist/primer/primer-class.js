"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Primer {
    constructor(entry) {
        const { PrimerClass } = entry;
        this.entryPrimer = new PrimerClass();
    }
    setElement(param) {
        const { element } = param;
        this.entryPrimer.setElement({
            element
        });
    }
    setTarget(param) {
        const { target } = param;
        this.entryPrimer.setTarget({
            target
        });
    }
    start() {
        this.entryPrimer.start();
    }
}
exports.Primer = Primer;
