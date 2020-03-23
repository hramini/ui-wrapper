"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_frame_demo_class_1 = require("../builder/builder-frame-demo-class");
const builder_tag_demo_class_1 = require("../builder/builder-tag-demo-class");
class UnitDemo {
    constructor() { }
    onBeforeProvide() { }
    onAfterProvide() { }
    onBeforeUpdate() {
        return { shouldUpdate: true };
    }
    onAfterUpdate() { }
    onBeforeDispose() { }
    forceUpdate() { }
    alterState(param) {
        const { state, callback } = param;
        this.state = Object.assign(Object.assign({}, this.state), state);
        callback && callback();
    }
    getProvided() {
        const element = this.provided;
        return { element };
    }
    onProvide() {
        this.onBeforeProvide();
        const { element } = this.provide();
        this.provided = element;
        this.onAfterProvide();
    }
    onUpdate() {
        const { shouldUpdate } = this.onBeforeUpdate();
        if (shouldUpdate) {
            const { element } = this.provide();
            this.provided = element;
            this.onAfterUpdate();
        }
    }
    setProps(param) {
        const { properties } = param;
        this.props = properties;
    }
    getTagBuilder() {
        return { tagBuilderClass: builder_tag_demo_class_1.TagBuilderDemo };
    }
    getFrameBuilder() {
        return { frameBuilderClass: builder_frame_demo_class_1.FrameBuilderDemo };
    }
}
exports.UnitDemo = UnitDemo;
