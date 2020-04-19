"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TagBuilder {
    constructor(entry) {
        const { TagBuilderConstructor } = entry;
        this.builder = new TagBuilderConstructor();
    }
    buildElement(param) {
        const { name, properties, children } = param;
        const { element } = this.builder.buildElement({ children, name, properties });
        return { element };
    }
    static setTagBuilder(param) {
        const { tagBuilderClass } = param;
        TagBuilder.tagBuilderInstance = new TagBuilder({ TagBuilderConstructor: tagBuilderClass });
    }
    static getTagBuilder() {
        const { tagBuilderInstance } = TagBuilder;
        return { tagBuilderInstance };
    }
}
exports.TagBuilder = TagBuilder;
