"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tag_builder_class_1 = require("../../builder/tag/tag-builder-class");
const unit_class_1 = require("../unit-class");
class UnitTag extends unit_class_1.Unit {
    constructor() {
        super();
        const { tagBuilderInstance } = tag_builder_class_1.TagBuilder.getTagBuilder();
        this.builder = tagBuilderInstance;
    }
}
exports.UnitTag = UnitTag;
