/* eslint-disable max-lines */
/* eslint-disable max-statements */
import { IUnitDemoProps, IUnitDemoStates } from '../unit-demo-interface';
import { UnitFramework } from './unit-framework-demo-class';

describe('@UnitTest', (): void => {
  let unitDemo: UnitFramework<IUnitDemoProps, IUnitDemoStates>;
  const elementValue: string = '';

  beforeEach((): void => {
    unitDemo = new UnitFramework<IUnitDemoProps, IUnitDemoStates>();
  });

  describe('#constructor', (): void => {
    test('expects to be an instance of @UnitFramework', (): void => {
      expect(unitDemo).toBeInstanceOf(UnitFramework);
    });
  });

  describe('#provide', (): void => {
    test(`expects element to be ${elementValue} when non of lifeCycle method is called`, (): void => {
      const { element } = unitDemo.provide();

      expect(element).toBe(elementValue);
    });
  });

  describe('#onBeforeProvide', (): void => {
    test('expects element not to change', (): void => {
      unitDemo.onBeforeProvide();
      const { element } = unitDemo.provide();

      expect(element).toBe(elementValue);
    });
  });

  describe('#onAfterProvide', (): void => {
    test('expects element not to change', (): void => {
      unitDemo.onAfterProvide();
      const { element } = unitDemo.provide();

      expect(element).toBe(elementValue);
    });
  });

  describe('#onBeforeUpdate', (): void => {
    test('expects to return true and element should not be changed', (): void => {
      const { shouldUpdate } = unitDemo.onBeforeUpdate();
      const { element } = unitDemo.provide();

      expect(shouldUpdate).toBeTruthy();
      expect(element).toBe(elementValue);
    });
  });

  describe('#onAfterUpdate', (): void => {
    test('expects element not to change', (): void => {
      unitDemo.onAfterUpdate();
      const { element } = unitDemo.provide();

      expect(element).toBe(elementValue);
    });
  });

  describe('#onBeforeDispose', (): void => {
    test('expects element not to change', (): void => {
      unitDemo.onBeforeDispose();
      const { element } = unitDemo.provide();

      expect(element).toBe(elementValue);
    });
  });

  describe('#forceUpdate', (): void => {
    test('expects element not to change', (): void => {
      unitDemo.forceUpdate();
      const { element } = unitDemo.provide();

      expect(element).toBe(elementValue);
    });
  });

  describe('#alterState', (): void => {
    const newNameState: string = 'test-name';
    const newTestTextValue: string = 'changed-test-text';
    test(`expects name state to change and be ${newNameState}`, (): void => {
      unitDemo.alterState({
        state: {
          name: newNameState
        }
      });
      const { name } = unitDemo.state;

      expect(name).toBe(newNameState);
    });

    test(`expects name state to change and be ${newNameState} and its callbackFunction changes the "testText" Value to ${newTestTextValue}`, (): void => {
      let testText: string = 'test-text';
      unitDemo.alterState({
        callbackFunction(): void {
          testText = newTestTextValue;
        },
        state: {
          name: newNameState
        }
      });
      const { name } = unitDemo.state;

      expect(name).toBe(newNameState);
      expect(testText).toBe(newTestTextValue);
    });
  });
});
