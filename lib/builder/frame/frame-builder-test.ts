import { CustomDemo } from '../../component/custom-demo-component';
import { ICustomDemoProperties, ICustomDemoStates } from '../../component/custom-demo-interface';
import { TDemoElement } from '../../type/element-type';
import { FrameBuilder } from './frame-builder-class';
import { FrameBuilderDemo } from './frame-builder-demo-class';

describe('@FrameBuilder', (): void => {
  describe('$#geFrameBuilder', (): void => {
    test('expects to be undefined when the frame builder is not set yet', (): void => {
      const { frameBuilderInstance } = FrameBuilder.getFrameBuilder<TDemoElement>();

      expect(frameBuilderInstance).toBeUndefined();
    });

    test('expects to be instance of @Builder when the frame builder is set', (): void => {
      FrameBuilder.setFrameBuilder<TDemoElement>({
        frameBuilderClass: FrameBuilderDemo
      });
      const { frameBuilderInstance } = FrameBuilder.getFrameBuilder<TDemoElement>();

      expect(frameBuilderInstance).toBeInstanceOf(FrameBuilder);
    });
  });

  describe('#buildElement', (): void => {
    const customDemoTagName: string = 'on-constructor';
    beforeAll((): void => {
      FrameBuilder.setFrameBuilder<TDemoElement>({
        frameBuilderClass: FrameBuilderDemo
      });
    });

    test(`expects element to be ${customDemoTagName}`, (): void => {
      const { frameBuilderInstance } = FrameBuilder.getFrameBuilder<TDemoElement>();
      const { element } = frameBuilderInstance.buildElement<
        ICustomDemoProperties,
        ICustomDemoStates
      >({
        UnitConstructor: CustomDemo,
        properties: {}
      });

      expect(element).toBe(customDemoTagName);
    });
  });
});
