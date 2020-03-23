"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_demo_unit_1 = require("../unit/custom-demo-unit");
const builder_class_1 = require("./builder-class");
const builder_frame_demo_class_1 = require("./builder-frame-demo-class");
const builder_tag_demo_class_1 = require("./builder-tag-demo-class");
describe('@Builder', () => {
    describe('#geTagBuilder', () => {
        test('test getTagBuilder with TagBuilderDemo', () => {
            const createInstanceTagBuilder = builder_class_1.Builder.getTagBuilder({
                tagBuilderClass: builder_tag_demo_class_1.TagBuilderDemo
            });
            const useCreatedInstanceTagBuilder = builder_class_1.Builder.getTagBuilder({
                tagBuilderClass: builder_tag_demo_class_1.TagBuilderDemo
            });
            expect(createInstanceTagBuilder).toBeInstanceOf(builder_class_1.Builder);
            expect(useCreatedInstanceTagBuilder).toBeInstanceOf(builder_class_1.Builder);
        });
    });
    describe('#geFrameBuilder', () => {
        test('test getFrameBuilder with FrameBuilderDemo', () => {
            const createInstanceFrameBuilder = builder_class_1.Builder.getFrameBuilder({
                frameBuilderClass: builder_frame_demo_class_1.FrameBuilderDemo
            });
            const useCreatedInstanceFrameBuilder = builder_class_1.Builder.getFrameBuilder({
                frameBuilderClass: builder_frame_demo_class_1.FrameBuilderDemo
            });
            expect(createInstanceFrameBuilder).toBeInstanceOf(builder_class_1.Builder);
            expect(useCreatedInstanceFrameBuilder).toBeInstanceOf(builder_class_1.Builder);
        });
    });
    describe('#buildElement', () => {
        test('test buildElement method of tagBuilder', () => {
            const tagBuilder = builder_class_1.Builder.getTagBuilder({
                tagBuilderClass: builder_tag_demo_class_1.TagBuilderDemo
            });
            const { element } = tagBuilder.buildElement({
                name: 'test-tag',
                properties: null,
                children: []
            });
            expect(element).toBe('test-tag');
        });
        test('test buildElement method of frameBuilder', () => {
            const frameBuilder = builder_class_1.Builder.getFrameBuilder({
                frameBuilderClass: builder_frame_demo_class_1.FrameBuilderDemo
            });
            const { element } = frameBuilder.buildElement({
                name: custom_demo_unit_1.CustomDemo,
                properties: null,
                children: []
            });
            expect(element).toBe('on-constructor');
        });
    });
});
