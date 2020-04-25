"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const frame_builder_class_1 = require("../../builder/frame/frame-builder-class");
const unit_class_1 = require("../unit-class");
class UnitFrame extends unit_class_1.Unit {
    constructor() {
        super();
        const { frameBuilderInstance } = frame_builder_class_1.FrameBuilder.getFrameBuilder();
        this.builder = frameBuilderInstance;
    }
}
exports.UnitFrame = UnitFrame;
