"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unit_class_1 = require("../unit/unit-class");
class Primer {
    constructor(entry) {
        const { PrimerConstructor } = entry;
        this.entryPrimer = new PrimerConstructor();
        const { unitPrototype } = this.entryPrimer.getUnitPrototype();
        Object.setPrototypeOf(unit_class_1.Unit.prototype, unitPrototype);
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
