"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Unit {
    forceUpdate() { }
    alterState(param) {
        const { state } = param;
        this.state = Object.assign(Object.assign({}, this.state), state);
    }
    onBeforeProvide() { }
    onAfterProvide() { }
    onBeforeUpdate() {
        return { shouldUpdate: true };
    }
    onAfterUpdate() { }
    onBeforeDispose() { }
}
exports.Unit = Unit;
