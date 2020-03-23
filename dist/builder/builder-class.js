"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Builder {
    constructor(entry) {
        const { builder } = entry;
        this.builder = new builder();
    }
    static getTagBuilder(param) {
        const { tagBuilderClass } = param;
        if (!this.tagBuilderInstance) {
            this.tagBuilderInstance = new Builder({ builder: tagBuilderClass });
        }
        return this.tagBuilderInstance;
    }
    static getFrameBuilder(param) {
        const { frameBuilderClass } = param;
        if (!this.frameBuilderInstance) {
            this.frameBuilderInstance = new Builder({ builder: frameBuilderClass });
        }
        return this.frameBuilderInstance;
    }
    buildElement(elementOption) {
        const { element } = this.builder.buildElement(elementOption);
        return { element };
    }
}
exports.Builder = Builder;
