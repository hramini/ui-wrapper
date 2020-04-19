"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Builder {
    constructor(entry) {
        const { BuilderConstructor } = entry;
        this.builder = new BuilderConstructor();
    }
    buildElement(param) {
        const { name, properties, children } = param;
        const { element } = this.builder.buildElement({ children, name, properties });
        return { element };
    }
    static setTagBuilder(param) {
        const { tagBuilderClass } = param;
        Builder.tagBuilderInstance = new Builder({ BuilderConstructor: tagBuilderClass });
    }
    static setFrameBuilder(param) {
        const { frameBuilderClass } = param;
        Builder.frameBuilderInstance = new Builder({ BuilderConstructor: frameBuilderClass });
    }
    static getTagBuilder() {
        const { tagBuilderInstance } = Builder;
        return { tagBuilderInstance };
    }
    static getFrameBuilder() {
        const { frameBuilderInstance } = Builder;
        return { frameBuilderInstance };
    }
}
exports.Builder = Builder;
