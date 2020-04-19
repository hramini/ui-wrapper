"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FrameBuilder {
    constructor(entry) {
        const { FrameBuilderConstructor } = entry;
        this.frameBuilder = new FrameBuilderConstructor();
    }
    buildElement(param) {
        const { properties, children, UnitConstructor } = param;
        const { element } = this.frameBuilder.buildElement({
            UnitConstructor,
            children,
            properties
        });
        return { element };
    }
    static setFrameBuilder(param) {
        const { frameBuilderClass } = param;
        FrameBuilder.frameBuilderInstance = new FrameBuilder({
            FrameBuilderConstructor: frameBuilderClass
        });
    }
    static getFrameBuilder() {
        const { frameBuilderInstance } = FrameBuilder;
        return { frameBuilderInstance };
    }
}
exports.FrameBuilder = FrameBuilder;
