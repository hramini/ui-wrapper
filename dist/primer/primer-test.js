"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const virtual_document_1 = require("virtual-document");
const primer_class_1 = require("./primer-class");
const primer_demo_class_1 = require("./primer-demo-class");
describe('@Primer', () => {
    let doc;
    let documentDemo;
    let primer;
    const setElementId = 'set_element_div';
    const setTargetId = 'root';
    beforeEach(() => {
        doc = new virtual_document_1.VirtualDocument();
        documentDemo = new virtual_document_1.VirtualDocumentDemo({ virtualDocument: doc });
        documentDemo.createBase();
        primer = new primer_class_1.Primer({ PrimerClass: primer_demo_class_1.PrimerDemo });
    });
    describe('#setElement', () => {
        test(`expects element to be a string html with ${setElementId} as id`, () => {
            const { element: setElementDiv } = doc.makeElement({ tagName: virtual_document_1.ElementTag.DIV });
            virtual_document_1.VirtualDocument.setId({ source: setElementDiv, identifier: setElementId });
            primer.setElement({ element: setElementDiv.outerHTML });
            const { entryPrimer: { element } } = primer;
            expect(element).toBe(`<div id="${setElementId}"/>`);
        });
    });
    describe('#setTarget', () => {
        test(`expects target to be an element with ${setTargetId} as id`, () => {
            const { element: setTargetElement } = doc.findElementById({ identifier: setTargetId });
            primer.setTarget({ target: setTargetElement });
            const { entryPrimer: { target: { id: identifier } } } = primer;
            expect(identifier).toBe(setTargetId);
        });
    });
    describe('#start', () => {
        test(`expects an element with ${setTargetId} id, have been appended an element with ${setElementId} id in itself`, () => {
            const { element } = doc.makeElement({ tagName: virtual_document_1.ElementTag.DIV });
            virtual_document_1.VirtualDocument.setId({
                source: element,
                identifier: setElementId
            });
            virtual_document_1.VirtualDocument.setInnerHtml({
                source: element,
                innerHtml: 'inner-test'
            });
            const { outerHTML } = element;
            primer.setElement({
                element: outerHTML
            });
            const { element: target } = doc.findElementById({ identifier: setTargetId });
            primer.setTarget({
                target
            });
            primer.start();
            const { isFound: isChildElementFound, element: childElement } = doc.findElementById({
                identifier: setElementId
            });
            const { isFound: isParentElementFound, parentElement: { id: parentElementId } } = virtual_document_1.VirtualDocument.getParentElement({ element: childElement });
            const { id: childElementId } = childElement;
            expect(isChildElementFound).toBeTruthy();
            expect(childElementId).toBe(setElementId);
            expect(isParentElementFound).toBeTruthy();
            expect(parentElementId).toBe(setTargetId);
        });
    });
});
