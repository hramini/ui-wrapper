"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_class_1 = require("../builder/builder-class");
const unit_class_1 = require("./unit-class");
class UnitFrame extends unit_class_1.Unit {
    constructor() {
        super();
        const { frameBuilderClass } = this.getFrameBuilder();
        this.builder = builder_class_1.Builder.getFrameBuilder({ frameBuilderClass });
    }
}
exports.UnitFrame = UnitFrame;
