"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_demo_unit_1 = require("../unit/custom-demo-unit");
const builder_class_1 = require("./builder-class");
const builder_frame_demo_class_1 = require("./builder-frame-demo-class");
const builder_tag_demo_class_1 = require("./builder-tag-demo-class");
describe('@Builder', () => {
    describe('#geTagBuilder', () => {
        test('test getTagBuilder with TagBuilderDemo', () => {
            const { tagBuilderInstance } = builder_class_1.Builder.getTagBuilder();
            expect(tagBuilderInstance).toBeUndefined();
        });
        test('test getTagBuilder with TagBuilderDemo', () => {
            builder_class_1.Builder.setTagBuilder({
                tagBuilderClass: builder_tag_demo_class_1.TagBuilderDemo
            });
            const { tagBuilderInstance } = builder_class_1.Builder.getTagBuilder();
            expect(tagBuilderInstance).toBeInstanceOf(builder_class_1.Builder);
        });
    });
    describe('#geFrameBuilder', () => {
        test('test getFrameBuilder with FrameBuilderDemo', () => {
            const { frameBuilderInstance } = builder_class_1.Builder.getFrameBuilder();
            expect(frameBuilderInstance).toBeUndefined();
        });
        test('test getFrameBuilder with FrameBuilderDemo', () => {
            builder_class_1.Builder.setFrameBuilder({
                frameBuilderClass: builder_frame_demo_class_1.FrameBuilderDemo
            });
            const { frameBuilderInstance } = builder_class_1.Builder.getFrameBuilder();
            expect(frameBuilderInstance).toBeInstanceOf(builder_class_1.Builder);
        });
    });
    describe('#buildElement', () => {
        beforeAll(() => {
            builder_class_1.Builder.setTagBuilder({
                tagBuilderClass: builder_tag_demo_class_1.TagBuilderDemo
            });
            builder_class_1.Builder.setFrameBuilder({
                frameBuilderClass: builder_frame_demo_class_1.FrameBuilderDemo
            });
        });
        test('test buildElement method of tagBuilder', () => {
            const { tagBuilderInstance } = builder_class_1.Builder.getTagBuilder();
            const { element } = tagBuilderInstance.buildElement({
                name: 'test-tag',
                properties: null,
                children: []
            });
            expect(element).toBe('test-tag');
        });
        test('test buildElement method of frameBuilder', () => {
            const { frameBuilderInstance } = builder_class_1.Builder.getFrameBuilder();
            const { element } = frameBuilderInstance.buildElement({
                name: custom_demo_unit_1.CustomDemo,
                properties: null,
                children: []
            });
            expect(element).toBe('on-constructor');
        });
    });
});
