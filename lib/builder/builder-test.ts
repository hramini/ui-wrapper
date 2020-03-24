import { TDemoElement } from '../type/element-type';
import { CustomDemo } from '../unit/custom-demo-unit';
import { Builder } from './builder-class';
import { FrameBuilderDemo } from './builder-frame-demo-class';
import { TagBuilderDemo } from './builder-tag-demo-class';

describe('@Builder', () => {
  describe('#geTagBuilder', () => {
    test('test getTagBuilder with TagBuilderDemo', () => {
      const { tagBuilderInstance } = Builder.getTagBuilder<TDemoElement>();
      expect(tagBuilderInstance).toBeUndefined();
    });

    test('test getTagBuilder with TagBuilderDemo', () => {
      Builder.setTagBuilder({
        tagBuilderClass: TagBuilderDemo
      });
      const { tagBuilderInstance } = Builder.getTagBuilder<TDemoElement>();
      expect(tagBuilderInstance).toBeInstanceOf(Builder);
    });
  });

  describe('#geFrameBuilder', () => {
    test('test getFrameBuilder with FrameBuilderDemo', () => {
      const { frameBuilderInstance } = Builder.getFrameBuilder<TDemoElement>();
      expect(frameBuilderInstance).toBeUndefined();
    });

    test('test getFrameBuilder with FrameBuilderDemo', () => {
      Builder.setFrameBuilder({
        frameBuilderClass: FrameBuilderDemo
      });
      const { frameBuilderInstance } = Builder.getFrameBuilder<TDemoElement>();
      expect(frameBuilderInstance).toBeInstanceOf(Builder);
    });
  });

  describe('#buildElement', () => {
    beforeAll(() => {
      Builder.setTagBuilder({
        tagBuilderClass: TagBuilderDemo
      });
      Builder.setFrameBuilder({
        frameBuilderClass: FrameBuilderDemo
      });
    });

    test('test buildElement method of tagBuilder', () => {
      const { tagBuilderInstance } = Builder.getTagBuilder<TDemoElement>();
      const { element } = tagBuilderInstance.buildElement({
        name: 'test-tag',
        properties: null,
        children: []
      });

      expect(element).toBe('test-tag');
    });

    test('test buildElement method of frameBuilder', () => {
      const { frameBuilderInstance } = Builder.getFrameBuilder<TDemoElement>();
      const { element } = frameBuilderInstance.buildElement({
        name: CustomDemo,
        properties: null,
        children: []
      });

      expect(element).toBe('on-constructor');
    });
  });
});
