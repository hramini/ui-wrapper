"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_demo_unit_1 = require("../../unit/custom-demo-unit");
const frame_builder_class_1 = require("./frame-builder-class");
const frame_builder_demo_class_1 = require("./frame-builder-demo-class");
describe('@FrameBuilder', () => {
    describe('$#geFrameBuilder', () => {
        test('expects to be undefined when the frame builder is not set yet', () => {
            const { frameBuilderInstance } = frame_builder_class_1.FrameBuilder.getFrameBuilder();
            expect(frameBuilderInstance).toBeUndefined();
        });
        test('expects to be instance of @Builder when the frame builder is set', () => {
            frame_builder_class_1.FrameBuilder.setFrameBuilder({
                frameBuilderClass: frame_builder_demo_class_1.FrameBuilderDemo
            });
            const { frameBuilderInstance } = frame_builder_class_1.FrameBuilder.getFrameBuilder();
            expect(frameBuilderInstance).toBeInstanceOf(frame_builder_class_1.FrameBuilder);
        });
    });
    describe('#buildElement', () => {
        const customDemoTagName = 'on-constructor';
        beforeAll(() => {
            frame_builder_class_1.FrameBuilder.setFrameBuilder({
                frameBuilderClass: frame_builder_demo_class_1.FrameBuilderDemo
            });
        });
        test(`expects element to be ${customDemoTagName}`, () => {
            const { frameBuilderInstance } = frame_builder_class_1.FrameBuilder.getFrameBuilder();
            const { element } = frameBuilderInstance.buildElement({
                UnitConstructor: custom_demo_unit_1.CustomDemo,
                properties: {}
            });
            expect(element).toBe(customDemoTagName);
        });
    });
});
