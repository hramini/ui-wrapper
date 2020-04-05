"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const virtual_document_1 = require("virtual-document");
const primer_class_1 = require("./primer-class");
const primer_demo_class_1 = require("./primer-demo-class");
describe('@Primer', () => {
    let doc;
    let documentDemo;
    let primer;
    beforeEach(() => {
        doc = new virtual_document_1.VirtualDocument();
        documentDemo = new virtual_document_1.VirtualDocumentDemo({ virtualDocument: doc });
        documentDemo.createBase();
        primer = new primer_class_1.Primer({ PrimerClass: primer_demo_class_1.PrimerDemo });
    });
    describe('#setElement', () => {
        test('testing setElement using getElement', () => {
            const { element: setElementDiv } = doc.makeElement({ tagName: virtual_document_1.ElementTag.DIV });
            virtual_document_1.VirtualDocument.setId({ source: setElementDiv, identifier: 'set_element_div' });
            primer.setElement({ element: setElementDiv.outerHTML });
            const { entryPrimer: { element } } = primer;
            expect(element).toBe('<div id="set_element_div"/>');
        });
    });
    describe('#setTarget', () => {
        test('testing setTarget using getTarget', () => {
            const { element: setTargetElement } = doc.findElementById({ identifier: 'root' });
            primer.setTarget({ target: setTargetElement });
            const { entryPrimer: { target: { id: identifier } } } = primer;
            expect(identifier).toBe('root');
        });
    });
    describe('#start', () => {
        test('test appended element and its parent after start', () => {
            const { element } = doc.makeElement({ tagName: virtual_document_1.ElementTag.DIV });
            virtual_document_1.VirtualDocument.setId({
                source: element,
                identifier: 'element_for_start'
            });
            virtual_document_1.VirtualDocument.setInnerHtml({
                source: element,
                innerHtml: 'inner-test'
            });
            const { outerHTML } = element;
            primer.setElement({
                element: outerHTML
            });
            const { element: target } = doc.findElementById({ identifier: 'root' });
            primer.setTarget({
                target
            });
            primer.start();
            const { isFound: isChildElementFound, element: childElement } = doc.findElementById({
                identifier: 'element_for_start'
            });
            const { isFound: isParentElementFound, parentElement: { id: parentElementId } } = virtual_document_1.VirtualDocument.getParentElement({ element: childElement });
            const { tagName: childElementTagName } = childElement;
            expect(isChildElementFound).toBeTruthy();
            expect(childElementTagName).toBe('div');
            expect(isParentElementFound).toBeTruthy();
            expect(parentElementId).toBe('root');
        });
    });
});
