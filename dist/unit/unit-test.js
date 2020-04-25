"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unit_demo_class_1 = require("./unit-demo-class");
describe('@Unit', () => {
    let unitDemo;
    const elementValue = 'test-provide';
    beforeEach(() => {
        unitDemo = new unit_demo_class_1.UnitDemo();
    });
    describe('#constructor', () => {
        test('expects to be an instance of @UnitDemo', () => {
            expect(unitDemo).toBeInstanceOf(unit_demo_class_1.UnitDemo);
        });
    });
    describe('#provide', () => {
        test(`expects element to be ${elementValue} when non of lifeCycle method is called`, () => {
            const { element } = unitDemo.provide();
            expect(element).toBe(elementValue);
        });
    });
    describe('#onBeforeProvide', () => {
        test('expects element not to change', () => {
            unitDemo.onBeforeProvide();
            const { element } = unitDemo.provide();
            expect(element).toBe(elementValue);
        });
    });
    describe('#onAfterProvide', () => {
        test('expects element not to change', () => {
            unitDemo.onAfterProvide();
            const { element } = unitDemo.provide();
            expect(element).toBe(elementValue);
        });
    });
    describe('#onBeforeUpdate', () => {
        test('expects to return true and element should not be changed', () => {
            const { shouldUpdate } = unitDemo.onBeforeUpdate();
            const { element } = unitDemo.provide();
            expect(shouldUpdate).toBeTruthy();
            expect(element).toBe(elementValue);
        });
    });
    describe('#onAfterUpdate', () => {
        test('expects element not to change', () => {
            unitDemo.onAfterUpdate();
            const { element } = unitDemo.provide();
            expect(element).toBe(elementValue);
        });
    });
    describe('#onBeforeDispose', () => {
        test('expects element not to change', () => {
            unitDemo.onBeforeDispose();
            const { element } = unitDemo.provide();
            expect(element).toBe(elementValue);
        });
    });
    describe('#forceUpdate', () => {
        test('expects element not to change', () => {
            unitDemo.forceUpdate();
            const { element } = unitDemo.provide();
            expect(element).toBe(elementValue);
        });
    });
    describe('#alterState', () => {
        const newNameState = 'test-name';
        const newTestTextValue = 'changed-test-text';
        test(`expects name state to change and be ${newNameState}`, () => {
            unitDemo.alterState({
                state: {
                    name: newNameState
                }
            });
            const { name } = unitDemo.state;
            expect(name).toBe(newNameState);
        });
        test(`expects name state to change and be ${newNameState} and its callbackFunction changes the "testText" Value to ${newTestTextValue}`, () => {
            let testText = 'test-text';
            unitDemo.alterState({
                callbackFunction() {
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
