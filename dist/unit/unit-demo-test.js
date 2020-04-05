"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_demo_unit_1 = require("./custom-demo-unit");
describe('@UnitDemo', () => {
    let customDemo;
    beforeEach(() => {
        customDemo = new custom_demo_unit_1.CustomDemo();
    });
    describe('#constructor', () => {
        test('testing unit demo constructor', () => {
            expect(customDemo).toBeInstanceOf(custom_demo_unit_1.CustomDemo);
        });
    });
    describe('#provide', () => {
        test('provide should return a string', () => {
            const { element } = customDemo.provide();
            expect(element).toBe('on-constructor');
        });
    });
    describe('#onBeforeDispose', () => {
        test('on before dispose test', () => {
            customDemo.onBeforeDispose();
            const { element } = customDemo.provide();
            expect(element).toBe('');
        });
    });
    describe('#changeShouldUpdate', () => {
        test('when status is true', () => {
            customDemo.changeShouldUpdate({ status: true });
            const { shouldUpdate } = customDemo.onBeforeUpdate();
            expect(shouldUpdate).toBeTruthy();
        });
        test('when status is false', () => {
            customDemo.changeShouldUpdate({ status: false });
            const { shouldUpdate } = customDemo.onBeforeUpdate();
            expect(shouldUpdate).toBeFalsy();
        });
    });
    describe('#onProvide', () => {
        beforeEach(() => {
            customDemo.onProvide();
        });
        test('onBeforeProvide should change the result of provide', () => {
            const { element } = customDemo.getProvided();
            expect(element).toBe('on-before-provide');
        });
        test('onAfterProvide should change the result of provide', () => {
            const { element } = customDemo.provide();
            expect(element).toBe('on-after-provide');
        });
    });
    describe('#onUpdate', () => {
        test('onBeforeUpdate should change the result of provide', () => {
            customDemo.onUpdate();
            const { element } = customDemo.getProvided();
            expect(element).toBe('on-before-update');
        });
        test('onAfterProvide should change the result of provide if onBeforeUpdate is returned true', () => {
            customDemo.onUpdate();
            const { element } = customDemo.provide();
            expect(element).toBe('on-after-update');
        });
        test('onAfterProvide should change the result of provide if onBeforeUpdate is returned false', () => {
            customDemo.changeShouldUpdate({ status: false });
            customDemo.onUpdate();
            const { element } = customDemo.provide();
            expect(element).toBe('on-before-update');
        });
    });
    describe('#forceUpdate', () => {
        test('forceUpdate test', () => {
            customDemo.forceUpdate();
            const { element } = customDemo.provide();
            expect(element).toBe('force-update');
        });
    });
    describe('#alterState', () => {
        test('change the state of CustomDemo without callback', () => {
            customDemo.alterState({
                state: {
                    name: 'test-name'
                }
            });
            const { name } = customDemo.state;
            expect(name).toBe('test-name');
        });
        test('change the state of CustomDemo with callback', () => {
            let testText = 'test-text';
            customDemo.alterState({
                callbackFunction() {
                    testText = 'changed-test-text';
                },
                state: {
                    name: 'test-name'
                }
            });
            expect(testText).toBe('changed-test-text');
        });
    });
    describe('#getProvided', () => {
        test('testing getProvided', () => {
            const { element } = customDemo.getProvided();
            expect(element).toBeUndefined();
        });
    });
    describe('#setProps', () => {
        test('testing serProps', () => {
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
