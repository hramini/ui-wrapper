"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_class_1 = require("../builder/builder-class");
const unit_class_1 = require("./unit-class");
class UnitTag extends unit_class_1.Unit {
    constructor() {
        super();
        const { tagBuilderInstance } = builder_class_1.Builder.getTagBuilder();
        this.builder = tagBuilderInstance;
    }
    buildElement(param) {
        const { name, properties, children } = param;
        const { element } = this.builder.buildElement({ children, name, properties });
        return { element };
    }
}
exports.UnitTag = UnitTag;
