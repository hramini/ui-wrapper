/* eslint-disable max-lines */
/* eslint-disable max-statements */
import { CustomDemo } from '../component/custom-demo-component';

describe('@UnitDemo', (): void => {
  let customDemo: CustomDemo;
  const onConstructorValue: string = 'on-constructor';
  const onBeforeProvideValue: string = 'on-before-provide';
  const onAfterProvideValue: string = 'on-after-provide';
  const onBeforeUpdateValue: string = 'on-before-update';
  const onAfterUpdateValue: string = 'on-after-update';
  const onBeforeDisposeValue: string = 'on-before-dispose';
  const forceUpdateValue: string = 'force-update';

  beforeEach((): void => {
    customDemo = new CustomDemo();
  });

  describe('#constructor', (): void => {
    test('expects to be an instance of @CustomDemo', (): void => {
      expect(customDemo).toBeInstanceOf(CustomDemo);
    });
  });

  describe('#provide', (): void => {
    test(`expects element to be ${onConstructorValue} when non of lifeCycle method is called`, (): void => {
      const { element } = customDemo.provide();

      expect(element).toBe(onConstructorValue);
    });
  });

  describe('#onBeforeProvide', (): void => {
    test(`expects element to change to ${onBeforeProvideValue}`, (): void => {
      customDemo.onBeforeProvide();
      const { element } = customDemo.provide();

      expect(element).toBe(onBeforeProvideValue);
    });
  });

  describe('#onAfterProvide', (): void => {
    test(`expects element to change to ${onAfterProvideValue}`, (): void => {
      customDemo.onAfterProvide();
      const { element } = customDemo.provide();

      expect(element).toBe(onAfterProvideValue);
    });
  });

  describe('#onBeforeUpdate', (): void => {
    test(`expects element to change to ${onBeforeUpdateValue} when shouldUpdate is true`, (): void => {
      customDemo.changeShouldUpdate({ status: true });
      const { shouldUpdate } = customDemo.onBeforeUpdate();
      const { element } = customDemo.provide();

      expect(shouldUpdate).toBeTruthy();
      expect(element).toBe(onBeforeUpdateValue);
    });

    test(`expects element to change to ${onBeforeUpdateValue} even if when shouldUpdate is false`, (): void => {
      customDemo.changeShouldUpdate({ status: false });
      const { shouldUpdate } = customDemo.onBeforeUpdate();
      const { element } = customDemo.provide();

      expect(shouldUpdate).toBeFalsy();
      expect(element).toBe(onBeforeUpdateValue);
    });
  });

  describe('#onAfterUpdate', (): void => {
    test(`expects element to change to ${onAfterUpdateValue}`, (): void => {
      customDemo.onAfterUpdate();
      const { element } = customDemo.provide();

      expect(element).toBe(onAfterUpdateValue);
    });
  });

  describe('#onBeforeDispose', (): void => {
    test(`expects element to change to ${onBeforeDisposeValue}`, (): void => {
      customDemo.onBeforeDispose();
      const { element } = customDemo.provide();

      expect(element).toBe(onBeforeDisposeValue);
    });
  });

  describe('#onProvide', (): void => {
    beforeEach((): void => {
      customDemo.onProvide();
    });

    test(`expects element to be ${onBeforeProvideValue} when #onAfterProvide is not called yet`, (): void => {
      const { element } = customDemo.getProvided();

      expect(element).toBe(onBeforeProvideValue);
    });

    test(`expects element to be ${onAfterProvideValue} when calling method is completed`, (): void => {
      const { element } = customDemo.provide();

      expect(element).toBe(onAfterProvideValue);
    });
  });

  describe('#onUpdate', (): void => {
    test(`expects element to be ${onBeforeUpdateValue} when #onAfterUpdate is not called yet`, (): void => {
      customDemo.onUpdate();
      const { element } = customDemo.getProvided();

      expect(element).toBe(onBeforeUpdateValue);
    });

    test(`expects element to be ${onAfterUpdateValue} when calling method is completed and #onBeforeUpdate is returning "true" value`, (): void => {
      customDemo.onUpdate();
      const { element } = customDemo.provide();

      expect(element).toBe(onAfterUpdateValue);
    });

    test(`expects element to be ${onBeforeUpdateValue} when calling method is completed and #onBeforeUpdate is returning "false" value`, (): void => {
      customDemo.changeShouldUpdate({ status: false });
      customDemo.onUpdate();
      const { element } = customDemo.provide();

      expect(element).toBe(onBeforeUpdateValue);
    });
  });

  describe('#forceUpdate', (): void => {
    test(`expects element to be ${forceUpdateValue}`, (): void => {
      customDemo.forceUpdate();
      const { element } = customDemo.provide();

      expect(element).toBe(forceUpdateValue);
    });
  });

  describe('#alterState', (): void => {
    const newNameState: string = 'test-name';
    const newTestTextValue: string = 'changed-test-text';
    test(`expects name state to change and be ${newNameState}`, (): void => {
      customDemo.alterState({
        state: {
          name: newNameState
        }
      });
      const { name } = customDemo.state;

      expect(name).toBe(newNameState);
    });

    test(`expects name state to change and be ${newNameState} and its callbackFunction changes the "testText" Value to ${newTestTextValue}`, (): void => {
      let testText: string = 'test-text';
      customDemo.alterState({
        callbackFunction(): void {
          testText = newTestTextValue;
        },
        state: {
          name: newNameState
        }
      });
      const { name } = customDemo.state;

      expect(name).toBe(newNameState);
      expect(testText).toBe(newTestTextValue);
    });
  });

  describe('#getProvided', (): void => {
    test('expects element to be undefined in case #onProvide is not executed yet', (): void => {
      const { element } = customDemo.getProvided();

      expect(element).toBeUndefined();
    });
  });

  describe('#setProps', (): void => {
    const newNameProps: string = 'test-name';

    test(`expects name props to change and be ${newNameProps}`, (): void => {
      customDemo.setProperties({
        properties: {
          name: newNameProps
        }
      });
      const { name } = customDemo.props;

      expect(name).toBe(newNameProps);
    });
  });
});
