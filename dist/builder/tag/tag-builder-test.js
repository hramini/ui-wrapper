"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tag_builder_class_1 = require("./tag-builder-class");
const tag_builder_demo_class_1 = require("./tag-builder-demo-class");
describe('@TagBuilder', () => {
    describe('$#geTagBuilder', () => {
        test('expects to be undefined when the tag builder is not set yet', () => {
            const { tagBuilderInstance } = tag_builder_class_1.TagBuilder.getTagBuilder();
            expect(tagBuilderInstance).toBeUndefined();
        });
        test('expects to be instance of @Builder when the tag builder is set', () => {
            tag_builder_class_1.TagBuilder.setTagBuilder({
                tagBuilderClass: tag_builder_demo_class_1.TagBuilderDemo
            });
            const { tagBuilderInstance } = tag_builder_class_1.TagBuilder.getTagBuilder();
            expect(tagBuilderInstance).toBeInstanceOf(tag_builder_class_1.TagBuilder);
        });
    });
    describe('#buildElement', () => {
        const testTagName = 'test-tag';
        beforeAll(() => {
            tag_builder_class_1.TagBuilder.setTagBuilder({
                tagBuilderClass: tag_builder_demo_class_1.TagBuilderDemo
            });
        });
        test(`expects element to be ${testTagName}`, () => {
            const { tagBuilderInstance } = tag_builder_class_1.TagBuilder.getTagBuilder();
            const { element } = tagBuilderInstance.buildElement({
                name: testTagName,
                properties: {}
            });
            expect(element).toBe(testTagName);
        });
    });
});
