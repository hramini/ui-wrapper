"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Builder {
    constructor(entry) {
        const { BuilderClass } = entry;
        this.builder = new BuilderClass();
    }
    buildElement(param) {
        const { name, properties, children } = param;
        const { element } = this.builder.buildElement({ name, properties, children });
        return { element };
    }
    static setTagBuilder(param) {
        const { tagBuilderClass } = param;
        Builder.tagBuilderInstance = new Builder({ BuilderClass: tagBuilderClass });
    }
    static setFrameBuilder(param) {
        const { frameBuilderClass } = param;
        Builder.frameBuilderInstance = new Builder({ BuilderClass: frameBuilderClass });
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
