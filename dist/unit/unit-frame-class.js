"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_class_1 = require("../builder/builder-class");
const unit_class_1 = require("./unit-class");
class UnitFrame extends unit_class_1.Unit {
    constructor() {
        super();
        const { frameBuilderInstance } = builder_class_1.Builder.getFrameBuilder();
        this.builder = frameBuilderInstance;
    }
}
exports.UnitFrame = UnitFrame;
