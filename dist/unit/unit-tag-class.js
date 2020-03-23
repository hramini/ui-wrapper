"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_class_1 = require("../builder/builder-class");
const unit_class_1 = require("./unit-class");
class UnitTag extends unit_class_1.Unit {
    constructor() {
        super();
        const { tagBuilderClass } = this.getTagBuilder();
        this.builder = builder_class_1.Builder.getTagBuilder({ tagBuilderClass });
    }
}
exports.UnitTag = UnitTag;
