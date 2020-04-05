/* eslint-disable max-lines */
import { CustomDemo } from './custom-demo-unit';

describe('@UnitDemo', (): void => {
  let customDemo: CustomDemo;
  beforeEach((): void => {
    customDemo = new CustomDemo();
  });

  describe('#constructor', (): void => {
    test('testing unit demo constructor', (): void => {
      expect(customDemo).toBeInstanceOf(CustomDemo);
    });
  });

  describe('#provide', (): void => {
    test('provide should return a string', (): void => {
      const { element } = customDemo.provide();

      expect(element).toBe('on-constructor');
    });
  });

  describe('#onBeforeDispose', (): void => {
    test('on before dispose test', (): void => {
      customDemo.onBeforeDispose();
      const { element } = customDemo.provide();

      expect(element).toBe('');
    });
  });

  describe('#changeShouldUpdate', (): void => {
    test('when status is true', (): void => {
      customDemo.changeShouldUpdate({ status: true });
      const { shouldUpdate } = customDemo.onBeforeUpdate();

      expect(shouldUpdate).toBeTruthy();
    });

    test('when status is false', (): void => {
      customDemo.changeShouldUpdate({ status: false });
      const { shouldUpdate } = customDemo.onBeforeUpdate();

      expect(shouldUpdate).toBeFalsy();
    });
  });

  describe('#onProvide', (): void => {
    beforeEach((): void => {
      customDemo.onProvide();
    });

    test('onBeforeProvide should change the result of provide', (): void => {
      const { element } = customDemo.getProvided();

      expect(element).toBe('on-before-provide');
    });

    test('onAfterProvide should change the result of provide', (): void => {
      const { element } = customDemo.provide();

      expect(element).toBe('on-after-provide');
    });
  });

  describe('#onUpdate', (): void => {
    test('onBeforeUpdate should change the result of provide', (): void => {
      customDemo.onUpdate();
      const { element } = customDemo.getProvided();

      expect(element).toBe('on-before-update');
    });

    test('onAfterProvide should change the result of provide if onBeforeUpdate is returned true', (): void => {
      customDemo.onUpdate();
      const { element } = customDemo.provide();

      expect(element).toBe('on-after-update');
    });

    test('onAfterProvide should change the result of provide if onBeforeUpdate is returned false', (): void => {
      customDemo.changeShouldUpdate({ status: false });
      customDemo.onUpdate();
      const { element } = customDemo.provide();

      expect(element).toBe('on-before-update');
    });
  });

  describe('#forceUpdate', (): void => {
    test('forceUpdate test', (): void => {
      customDemo.forceUpdate();
      const { element } = customDemo.provide();

      expect(element).toBe('force-update');
    });
  });

  describe('#alterState', (): void => {
    test('change the state of CustomDemo without callback', (): void => {
      customDemo.alterState({
        state: {
          name: 'test-name'
        }
      });
      const { name } = customDemo.state;

      expect(name).toBe('test-name');
    });

    test('change the state of CustomDemo with callback', (): void => {
      let testText: string = 'test-text';
      customDemo.alterState({
        callbackFunction(): void {
          testText = 'changed-test-text';
        },
        state: {
          name: 'test-name'
        }
      });

      expect(testText).toBe('changed-test-text');
    });
  });

  describe('#getProvided', (): void => {
    test('testing getProvided', (): void => {
      const { element } = customDemo.getProvided();

      expect(element).toBeUndefined();
    });
  });

  describe('#setProps', (): void => {
    test('testing serProps', (): void => {
      customDemo.setProperties({
        properties: {
          name: 'test-name'
        }
      });
      const { name } = customDemo.props;

      expect(name).toBe('test-name');
    });
  });
});
