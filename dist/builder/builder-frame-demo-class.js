"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FrameBuilderDemo {
    buildElement(elementOption) {
        const { name } = elementOption;
        const unit = new name();
        const { element } = unit.provide();
        return { element };
    }
}
exports.FrameBuilderDemo = FrameBuilderDemo;
