import { CustomDemoSimple } from './custom-simple-demo-unit';

describe('@UnitDemo / no override', (): void => {
  let customDemo: CustomDemoSimple;
  beforeEach((): void => {
    customDemo = new CustomDemoSimple();
  });

  describe('#provide', (): void => {
    test('provide should return a string', (): void => {
      const { element } = customDemo.provide();

      expect(element).toBe('on-constructor');
    });
  });

  describe('#onProvide', (): void => {
    beforeEach((): void => {
      customDemo.onProvide();
    });

    test('onBeforeProvide should not change the result of provide', (): void => {
      const { element } = customDemo.getProvided();

      expect(element).toBe('on-constructor');
    });

    test('onAfterProvide should not change the result of provide', (): void => {
      const { element } = customDemo.provide();

      expect(element).toBe('on-constructor');
    });
  });

  describe('#onUpdate', (): void => {
    test('onBeforeUpdate should not change the result of provide', (): void => {
      customDemo.onUpdate();
      const { element } = customDemo.getProvided();

      expect(element).toBe('on-constructor');
    });
  });

  describe('#onBeforeDispose', (): void => {
    test('on before dispose test', (): void => {
      customDemo.onBeforeDispose();
      const { element } = customDemo.provide();

      expect(element).toBe('on-constructor');
    });
  });

  describe('#forceUpdate', (): void => {
    test('forceUpdate test', (): void => {
      customDemo.forceUpdate();
      const { element } = customDemo.provide();

      expect(element).toBe('on-constructor');
    });
  });
});
