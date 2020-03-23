"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const virtual_document_class_1 = require("../virtual-document/virtual-document-class");
const primer_class_1 = require("./primer-class");
const primer_demo_class_1 = require("./primer-demo-class");
describe('@Primer', () => {
    let doc;
    let primer;
    beforeAll(() => {
        doc = new virtual_document_class_1.VirtualDocument();
        doc.createBase();
        primer = new primer_class_1.Primer({ primer: primer_demo_class_1.PrimerDemo });
    });
    describe('#setElement', () => {
        beforeAll(() => {
            const { element: setElementDiv } = doc.makeElement({ tagName: 'div' });
            setElementDiv.id = 'set_element_div';
            primer.setElement({ element: setElementDiv.outerHTML });
        });
        test('testing setElement using getElement', () => {
            expect(primer.getElement().element).toBe('<div id="set_element_div"/>');
        });
    });
    describe('#setTarget', () => {
        beforeAll(() => {
            const { element: setTargetElement } = doc.findElementById({ id: 'root' });
            primer.setTarget({ target: setTargetElement });
        });
        test('testing setTarget using getTarget', () => {
            expect(primer.getTarget().target.id).toBe('root');
        });
    });
    describe('#start', () => {
        let primerForStart;
        beforeAll(() => {
            primerForStart = new primer_class_1.Primer({ primer: primer_demo_class_1.PrimerDemo });
            const { element } = doc.makeElement({ tagName: 'div' });
            element.id = 'element_for_start';
            element.innerHTML = 'inner-test';
            primerForStart.setElement({
                element: element.outerHTML
            });
            const { element: target } = doc.findElementById({ id: 'root' });
            primerForStart.setTarget({
                target
            });
            primerForStart.start();
        });
        test('test tagName of appended element after start', () => {
            const { element } = doc.findElementById({ id: 'element_for_start' });
            expect(element.tagName).toBe('div');
        });
        test('test parent of appended element after start', () => {
            const { element } = doc.findParentElementByChildId({ id: 'element_for_start' });
            expect(element.id).toBe('root');
        });
    });
});
