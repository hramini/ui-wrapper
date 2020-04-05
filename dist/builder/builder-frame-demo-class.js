"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FrameBuilderDemo {
    buildElement(param) {
        const { name: UnitClass } = param;
        const unit = new UnitClass();
        const { element } = unit.provide();
        return { element };
    }
}
exports.FrameBuilderDemo = FrameBuilderDemo;
