"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_demo_unit_1 = require("../unit/custom-demo-unit");
const builder_class_1 = require("./builder-class");
const frame_builder_demo_class_1 = require("./frame-builder-demo-class");
const tag_builder_demo_class_1 = require("./tag-builder-demo-class");
describe('@Builder', () => {
    describe('$#geTagBuilder', () => {
        test('expects to be undefined when the tag builder is not set yet', () => {
            const { tagBuilderInstance } = builder_class_1.Builder.getTagBuilder();
            expect(tagBuilderInstance).toBeUndefined();
        });
        test('expects to be instance of @Builder when the tag builder is set', () => {
            builder_class_1.Builder.setTagBuilder({
                tagBuilderClass: tag_builder_demo_class_1.TagBuilderDemo
            });
            const { tagBuilderInstance } = builder_class_1.Builder.getTagBuilder();
            expect(tagBuilderInstance).toBeInstanceOf(builder_class_1.Builder);
        });
    });
    describe('$#geFrameBuilder', () => {
        test('expects to be undefined when the frame builder is not set yet', () => {
            const { frameBuilderInstance } = builder_class_1.Builder.getFrameBuilder();
            expect(frameBuilderInstance).toBeUndefined();
        });
        test('expects to be instance of @Builder when the frame builder is set', () => {
            builder_class_1.Builder.setFrameBuilder({
                frameBuilderClass: frame_builder_demo_class_1.FrameBuilderDemo
            });
            const { frameBuilderInstance } = builder_class_1.Builder.getFrameBuilder();
            expect(frameBuilderInstance).toBeInstanceOf(builder_class_1.Builder);
        });
    });
    describe('#buildElement', () => {
        const testTagName = 'test-tag';
        const customDemoTagName = 'on-constructor';
        beforeAll(() => {
            builder_class_1.Builder.setTagBuilder({
                tagBuilderClass: tag_builder_demo_class_1.TagBuilderDemo
            });
            builder_class_1.Builder.setFrameBuilder({
                frameBuilderClass: frame_builder_demo_class_1.FrameBuilderDemo
            });
        });
        test(`expects element to be ${testTagName}`, () => {
            const { tagBuilderInstance } = builder_class_1.Builder.getTagBuilder();
            const { element } = tagBuilderInstance.buildElement({
                name: testTagName,
                properties: {}
            });
            expect(element).toBe(testTagName);
        });
        test(`expects element to be ${customDemoTagName}`, () => {
            const { frameBuilderInstance } = builder_class_1.Builder.getFrameBuilder();
            const { element } = frameBuilderInstance.buildElement({
                name: custom_demo_unit_1.CustomDemo,
                properties: {}
            });
            expect(element).toBe(customDemoTagName);
        });
    });
});
