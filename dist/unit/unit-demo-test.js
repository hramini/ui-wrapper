"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_demo_component_1 = require("../component/custom-demo-component");
describe('@UnitDemo', () => {
    let customDemo;
    const onConstructorValue = 'on-constructor';
    const onBeforeProvideValue = 'on-before-provide';
    const onAfterProvideValue = 'on-after-provide';
    const onBeforeUpdateValue = 'on-before-update';
    const onAfterUpdateValue = 'on-after-update';
    const onBeforeDisposeValue = 'on-before-dispose';
    const forceUpdateValue = 'force-update';
    beforeEach(() => {
        customDemo = new custom_demo_component_1.CustomDemo();
    });
    describe('#constructor', () => {
        test('expects to be an instance of @CustomDemo', () => {
            expect(customDemo).toBeInstanceOf(custom_demo_component_1.CustomDemo);
        });
    });
    describe('#provide', () => {
        test(`expects element to be ${onConstructorValue} when non of lifeCycle method is called`, () => {
            const { element } = customDemo.provide();
            expect(element).toBe(onConstructorValue);
        });
    });
    describe('#onBeforeProvide', () => {
        test(`expects element to change to ${onBeforeProvideValue}`, () => {
            customDemo.onBeforeProvide();
            const { element } = customDemo.provide();
            expect(element).toBe(onBeforeProvideValue);
        });
    });
    describe('#onAfterProvide', () => {
        test(`expects element to change to ${onAfterProvideValue}`, () => {
            customDemo.onAfterProvide();
            const { element } = customDemo.provide();
            expect(element).toBe(onAfterProvideValue);
        });
    });
    describe('#onBeforeUpdate', () => {
        test(`expects element to change to ${onBeforeUpdateValue} when shouldUpdate is true`, () => {
            customDemo.changeShouldUpdate({ status: true });
            const { shouldUpdate } = customDemo.onBeforeUpdate();
            const { element } = customDemo.provide();
            expect(shouldUpdate).toBeTruthy();
            expect(element).toBe(onBeforeUpdateValue);
        });
        test(`expects element to change to ${onBeforeUpdateValue} even if when shouldUpdate is false`, () => {
            customDemo.changeShouldUpdate({ status: false });
            const { shouldUpdate } = customDemo.onBeforeUpdate();
            const { element } = customDemo.provide();
            expect(shouldUpdate).toBeFalsy();
            expect(element).toBe(onBeforeUpdateValue);
        });
    });
    describe('#onAfterUpdate', () => {
        test(`expects element to change to ${onAfterUpdateValue}`, () => {
            customDemo.onAfterUpdate();
            const { element } = customDemo.provide();
            expect(element).toBe(onAfterUpdateValue);
        });
    });
    describe('#onBeforeDispose', () => {
        test(`expects element to change to ${onBeforeDisposeValue}`, () => {
            customDemo.onBeforeDispose();
            const { element } = customDemo.provide();
            expect(element).toBe(onBeforeDisposeValue);
        });
    });
    describe('#onProvide', () => {
        beforeEach(() => {
            customDemo.onProvide();
        });
        test(`expects element to be ${onBeforeProvideValue} when #onAfterProvide is not called yet`, () => {
            const { element } = customDemo.getProvided();
            expect(element).toBe(onBeforeProvideValue);
        });
        test(`expects element to be ${onAfterProvideValue} when calling method is completed`, () => {
            const { element } = customDemo.provide();
            expect(element).toBe(onAfterProvideValue);
        });
    });
    describe('#onUpdate', () => {
        test(`expects element to be ${onBeforeUpdateValue} when #onAfterUpdate is not called yet`, () => {
            customDemo.onUpdate();
            const { element } = customDemo.getProvided();
            expect(element).toBe(onBeforeUpdateValue);
        });
        test(`expects element to be ${onAfterUpdateValue} when calling method is completed and #onBeforeUpdate is returning "true" value`, () => {
            customDemo.onUpdate();
            const { element } = customDemo.provide();
            expect(element).toBe(onAfterUpdateValue);
        });
        test(`expects element to be ${onBeforeUpdateValue} when calling method is completed and #onBeforeUpdate is returning "false" value`, () => {
            customDemo.changeShouldUpdate({ status: false });
            customDemo.onUpdate();
            const { element } = customDemo.provide();
            expect(element).toBe(onBeforeUpdateValue);
        });
    });
    describe('#forceUpdate', () => {
        test(`expects element to be ${forceUpdateValue}`, () => {
            customDemo.forceUpdate();
            const { element } = customDemo.provide();
            expect(element).toBe(forceUpdateValue);
        });
    });
    describe('#alterState', () => {
        const newNameState = 'test-name';
        const newTestTextValue = 'changed-test-text';
        test(`expects name state to change and be ${newNameState}`, () => {
            customDemo.alterState({
                state: {
                    name: newNameState
                }
            });
            const { name } = customDemo.state;
            expect(name).toBe(newNameState);
        });
        test(`expects name state to change and be ${newNameState} and its callbackFunction changes the "testText" Value to ${newTestTextValue}`, () => {
            let testText = 'test-text';
            customDemo.alterState({
                callbackFunction() {
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
    describe('#getProvided', () => {
        test('expects element to be undefined in case #onProvide is not executed yet', () => {
            const { element } = customDemo.getProvided();
            expect(element).toBeUndefined();
        });
    });
    describe('#setProps', () => {
        const newNameProps = 'test-name';
        test(`expects name props to change and be ${newNameProps}`, () => {
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
