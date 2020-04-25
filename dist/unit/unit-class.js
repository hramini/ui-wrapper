"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Unit {
    forceUpdate() { }
    alterState(param) {
        var _a;
        const { state, callbackFunction } = param;
        this.state = Object.assign(Object.assign({}, this.state), state);
        (_a = callbackFunction) === null || _a === void 0 ? void 0 : _a();
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
