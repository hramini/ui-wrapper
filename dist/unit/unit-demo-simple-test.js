"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_simple_demo_unit_1 = require("./custom-simple-demo-unit");
describe('@UnitDemo / no override', () => {
    let customDemo;
    const elementValue = 'on-constructor';
    beforeEach(() => {
        customDemo = new custom_simple_demo_unit_1.CustomDemoSimple();
    });
    describe('#provide', () => {
        test(`expects element to be ${elementValue}`, () => {
            const { element } = customDemo.provide();
            expect(element).toBe(elementValue);
        });
    });
    describe('#onProvide', () => {
        beforeEach(() => {
            customDemo.onProvide();
        });
        test(`expects element to be ${elementValue}`, () => {
            const { element } = customDemo.getProvided();
            expect(element).toBe(elementValue);
        });
        test(`expects element to be ${elementValue}`, () => {
            const { element } = customDemo.provide();
            expect(element).toBe(elementValue);
        });
    });
    describe('#onUpdate', () => {
        test(`expects element to be ${elementValue}`, () => {
            customDemo.onUpdate();
            const { element } = customDemo.getProvided();
            expect(element).toBe(elementValue);
        });
    });
    describe('#onBeforeDispose', () => {
        test(`expects element to be ${elementValue}`, () => {
            customDemo.onBeforeDispose();
            const { element } = customDemo.provide();
            expect(element).toBe(elementValue);
        });
    });
    describe('#forceUpdate', () => {
        test(`expects element to be ${elementValue}`, () => {
            customDemo.forceUpdate();
            const { element } = customDemo.provide();
            expect(element).toBe(elementValue);
        });
    });
});
