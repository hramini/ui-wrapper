"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Builder {
    constructor(entry) {
        const { builder } = entry;
        this.builder = new builder();
    }
    static setTagBuilder(param) {
        const { tagBuilderClass } = param;
        this.tagBuilderInstance = new Builder({ builder: tagBuilderClass });
    }
    static setFrameBuilder(param) {
        const { frameBuilderClass } = param;
        this.frameBuilderInstance = new Builder({ builder: frameBuilderClass });
    }
    static getTagBuilder() {
        return { tagBuilderInstance: this.tagBuilderInstance };
    }
    static getFrameBuilder() {
        return { frameBuilderInstance: this.frameBuilderInstance };
    }
    buildElement(elementOption) {
        const { element } = this.builder.buildElement(elementOption);
        return { element };
    }
}
exports.Builder = Builder;
