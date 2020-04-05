import { TDemoElement } from '../type/element-type';
import { CustomDemo } from '../unit/custom-demo-unit';
import { Builder } from './builder-class';
import { FrameBuilderDemo } from './builder-frame-demo-class';
import { TagBuilderDemo } from './builder-tag-demo-class';

describe('@Builder', (): void => {
  describe('$#geTagBuilder', (): void => {
    test('test getTagBuilder with TagBuilderDemo', (): void => {
      const { tagBuilderInstance } = Builder.getTagBuilder<TDemoElement>();

      expect(tagBuilderInstance).toBeUndefined();
    });

    test('test getTagBuilder with TagBuilderDemo', (): void => {
      Builder.setTagBuilder<TDemoElement>({
        tagBuilderClass: TagBuilderDemo
      });
      const { tagBuilderInstance } = Builder.getTagBuilder<TDemoElement>();

      expect(tagBuilderInstance).toBeInstanceOf(Builder);
    });
  });

  describe('$#geFrameBuilder', (): void => {
    test('test getFrameBuilder with FrameBuilderDemo', (): void => {
      const { frameBuilderInstance } = Builder.getFrameBuilder<TDemoElement>();

      expect(frameBuilderInstance).toBeUndefined();
    });

    test('test getFrameBuilder with FrameBuilderDemo', (): void => {
      Builder.setFrameBuilder<TDemoElement>({
        frameBuilderClass: FrameBuilderDemo
      });
      const { frameBuilderInstance } = Builder.getFrameBuilder<TDemoElement>();

      expect(frameBuilderInstance).toBeInstanceOf(Builder);
    });
  });

  describe('#buildElement', (): void => {
    beforeAll((): void => {
      Builder.setTagBuilder<TDemoElement>({
        tagBuilderClass: TagBuilderDemo
      });
      Builder.setFrameBuilder<TDemoElement>({
        frameBuilderClass: FrameBuilderDemo
      });
    });

    test('test buildElement method of tagBuilder', (): void => {
      const { tagBuilderInstance } = Builder.getTagBuilder<TDemoElement>();
      const { element } = tagBuilderInstance.buildElement({
        children: [],
        name: 'test-tag',
        properties: null
      });

      expect(element).toBe('test-tag');
    });

    test('test buildElement method of frameBuilder', (): void => {
      const { frameBuilderInstance } = Builder.getFrameBuilder<TDemoElement>();
      const { element } = frameBuilderInstance.buildElement({
        children: [],
        name: CustomDemo,
        properties: null
      });

      expect(element).toBe('on-constructor');
    });
  });
});
