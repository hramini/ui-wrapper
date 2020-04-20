import { CustomDemoSimple } from '../component/custom-simple-demo-component';

describe('@UnitDemo / no override', (): void => {
  let customDemo: CustomDemoSimple;
  const elementValue: string = 'on-constructor';
  beforeEach((): void => {
    customDemo = new CustomDemoSimple();
  });

  describe('#provide', (): void => {
    test(`expects element to be ${elementValue}`, (): void => {
      const { element } = customDemo.provide();

      expect(element).toBe(elementValue);
    });
  });

  describe('#onProvide', (): void => {
    beforeEach((): void => {
      customDemo.onProvide();
    });

    test(`expects element to be ${elementValue}`, (): void => {
      const { element } = customDemo.getProvided();

      expect(element).toBe(elementValue);
    });

    test(`expects element to be ${elementValue}`, (): void => {
      const { element } = customDemo.provide();

      expect(element).toBe(elementValue);
    });
  });

  describe('#onUpdate', (): void => {
    test(`expects element to be ${elementValue}`, (): void => {
      customDemo.onUpdate();
      const { element } = customDemo.getProvided();

      expect(element).toBe(elementValue);
    });
  });

  describe('#onBeforeDispose', (): void => {
    test(`expects element to be ${elementValue}`, (): void => {
      customDemo.onBeforeDispose();
      const { element } = customDemo.provide();

      expect(element).toBe(elementValue);
    });
  });

  describe('#forceUpdate', (): void => {
    test(`expects element to be ${elementValue}`, (): void => {
      customDemo.forceUpdate();
      const { element } = customDemo.provide();

      expect(element).toBe(elementValue);
    });
  });
});
