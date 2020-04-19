import { TDemoElement } from '../../type/element-type';
import { ICustomDemoProperties } from '../../unit/custom-demo-interface';
import { TagBuilder } from './tag-builder-class';
import { TagBuilderDemo } from './tag-builder-demo-class';

describe('@TagBuilder', (): void => {
  describe('$#geTagBuilder', (): void => {
    test('expects to be undefined when the tag builder is not set yet', (): void => {
      const { tagBuilderInstance } = TagBuilder.getTagBuilder<TDemoElement>();

      expect(tagBuilderInstance).toBeUndefined();
    });

    test('expects to be instance of @Builder when the tag builder is set', (): void => {
      TagBuilder.setTagBuilder<TDemoElement>({
        tagBuilderClass: TagBuilderDemo
      });
      const { tagBuilderInstance } = TagBuilder.getTagBuilder<TDemoElement>();

      expect(tagBuilderInstance).toBeInstanceOf(TagBuilder);
    });
  });

  describe('#buildElement', (): void => {
    const testTagName: string = 'test-tag';
    beforeAll((): void => {
      TagBuilder.setTagBuilder<TDemoElement>({
        tagBuilderClass: TagBuilderDemo
      });
    });

    test(`expects element to be ${testTagName}`, (): void => {
      const { tagBuilderInstance } = TagBuilder.getTagBuilder<TDemoElement>();
      const { element } = tagBuilderInstance.buildElement<ICustomDemoProperties>({
        name: testTagName,
        properties: {}
      });

      expect(element).toBe(testTagName);
    });
  });
});
