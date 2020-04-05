"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnitDemo {
    onBeforeProvide() { }
    onAfterProvide() { }
    onBeforeUpdate() {
        return { shouldUpdate: true };
    }
    onAfterUpdate() { }
    onBeforeDispose() { }
    forceUpdate() { }
    alterState(param) {
        var _a;
        const { state, callbackFunction } = param;
        this.state = Object.assign(Object.assign({}, this.state), state);
        (_a = callbackFunction) === null || _a === void 0 ? void 0 : _a();
    }
    getProvided() {
        const { provided: element } = this;
        return { element };
    }
    onProvide() {
        this.onBeforeProvide();
        const { element } = this.provide();
        this.provided = element;
        this.onAfterProvide();
    }
    onUpdate() {
        const { shouldUpdate } = this.onBeforeUpdate();
        if (shouldUpdate) {
            const { element } = this.provide();
            this.provided = element;
            this.onAfterUpdate();
        }
    }
    setProperties(param) {
        const { properties } = param;
        this.props = properties;
    }
}
exports.UnitDemo = UnitDemo;
