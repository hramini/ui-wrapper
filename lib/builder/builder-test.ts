import { TDemoElement } from '../type/element-type';
import { CustomDemo } from '../unit/custom-demo-unit';
import { Builder } from './builder-class';
import { FrameBuilderDemo } from './frame-builder-demo-class';
import { TagBuilderDemo } from './tag-builder-demo-class';

describe('@Builder', (): void => {
  describe('$#geTagBuilder', (): void => {
    test('expects to be undefined when the tag builder is not set yet', (): void => {
      const { tagBuilderInstance } = Builder.getTagBuilder<TDemoElement>();

      expect(tagBuilderInstance).toBeUndefined();
    });

    test('expects to be instance of @Builder when the tag builder is set', (): void => {
      Builder.setTagBuilder<TDemoElement>({
        tagBuilderClass: TagBuilderDemo
      });
      const { tagBuilderInstance } = Builder.getTagBuilder<TDemoElement>();

      expect(tagBuilderInstance).toBeInstanceOf(Builder);
    });
  });

  describe('$#geFrameBuilder', (): void => {
    test('expects to be undefined when the frame builder is not set yet', (): void => {
      const { frameBuilderInstance } = Builder.getFrameBuilder<TDemoElement>();

      expect(frameBuilderInstance).toBeUndefined();
    });

    test('expects to be instance of @Builder when the frame builder is set', (): void => {
      Builder.setFrameBuilder<TDemoElement>({
        frameBuilderClass: FrameBuilderDemo
      });
      const { frameBuilderInstance } = Builder.getFrameBuilder<TDemoElement>();

      expect(frameBuilderInstance).toBeInstanceOf(Builder);
    });
  });

  describe('#buildElement', (): void => {
    const testTagName: string = 'test-tag';
    const customDemoTagName: string = 'on-constructor';
    beforeAll((): void => {
      Builder.setTagBuilder<TDemoElement>({
        tagBuilderClass: TagBuilderDemo
      });
      Builder.setFrameBuilder<TDemoElement>({
        frameBuilderClass: FrameBuilderDemo
      });
    });

    test(`expects element to be ${testTagName}`, (): void => {
      const { tagBuilderInstance } = Builder.getTagBuilder<TDemoElement>();
      const { element } = tagBuilderInstance.buildElement({
        name: testTagName,
        properties: {}
      });

      expect(element).toBe(testTagName);
    });

    test(`expects element to be ${customDemoTagName}`, (): void => {
      const { frameBuilderInstance } = Builder.getFrameBuilder<TDemoElement>();
      const { element } = frameBuilderInstance.buildElement({
        name: CustomDemo,
        properties: {}
      });

      expect(element).toBe(customDemoTagName);
    });
  });
});
