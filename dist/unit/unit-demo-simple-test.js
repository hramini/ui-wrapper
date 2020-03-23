"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_simple_demo_unit_1 = require("./custom-simple-demo-unit");
describe('@UnitDemo / no override', () => {
    let customDemo;
    beforeEach(() => {
        customDemo = new custom_simple_demo_unit_1.CustomDemoSimple();
    });
    describe('#provide', () => {
        test('provide should return a string', () => {
            const { element } = customDemo.provide();
            expect(element).toBe('on-constructor');
        });
    });
    describe('#onProvide', () => {
        beforeEach(() => {
            customDemo.onProvide();
        });
        test('onBeforeProvide should not change the result of provide', () => {
            const { element } = customDemo.getProvided();
            expect(element).toBe('on-constructor');
        });
        test('onAfterProvide should not change the result of provide', () => {
            const { element } = customDemo.provide();
            expect(element).toBe('on-constructor');
        });
    });
    describe('#onUpdate', () => {
        test('onBeforeUpdate should not change the result of provide', () => {
            customDemo.onUpdate();
            const { element } = customDemo.getProvided();
            expect(element).toBe('on-constructor');
        });
    });
    describe('#onBeforeDispose', () => {
        test('on before dispose test', () => {
            customDemo.onBeforeDispose();
            const { element } = customDemo.provide();
            expect(element).toBe('on-constructor');
        });
    });
    describe('#forceUpdate', () => {
        test('forceUpdate test', () => {
            customDemo.forceUpdate();
            const { element } = customDemo.provide();
            expect(element).toBe('on-constructor');
        });
    });
});
