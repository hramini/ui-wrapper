"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FrameBuilderDemo {
    buildElement(param) {
        const { name: UnitConstructor } = param;
        const unit = new UnitConstructor();
        const { element } = unit.provide();
        return { element };
    }
}
exports.FrameBuilderDemo = FrameBuilderDemo;
