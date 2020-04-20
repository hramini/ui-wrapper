import { ElementTag, VirtualDocument, VirtualDocumentDemo } from 'virtual-document';
import { TDemoElement } from '../type/element-type';
import { Primer } from './primer-class';
import { PrimerDemo } from './primer-demo-class';

describe('@Primer', (): void => {
  let doc: VirtualDocument;
  let documentDemo: VirtualDocumentDemo;
  let primer: Primer<TDemoElement>;
  const setElementId: string = 'set_element_div';
  const setTargetId: string = 'root';
  beforeEach((): void => {
    doc = new VirtualDocument();
    documentDemo = new VirtualDocumentDemo({ virtualDocument: doc });
    documentDemo.createBase();
    // eslint-disable-next-line @typescript-eslint/naming-convention
    primer = new Primer<TDemoElement>({ PrimerClass: PrimerDemo });
  });

  describe('#setElement', (): void => {
    test(`expects element to be a string html with ${setElementId} as id`, (): void => {
      const { element: setElementDiv } = doc.makeElement({ tagName: ElementTag.DIV });
      VirtualDocument.setId({ identifier: setElementId, source: setElementDiv });
      primer.setElement({ element: setElementDiv.outerHTML });

      const {
        entryPrimer: { element }
      } = primer;

      expect(element).toBe(`<div id="${setElementId}"/>`);
    });
  });

  describe('#setTarget', (): void => {
    test(`expects target to be an element with ${setTargetId} as id`, (): void => {
      const { element: setTargetElement } = doc.findElementById({ identifier: setTargetId });
      primer.setTarget({ target: setTargetElement });
      const {
        entryPrimer: {
          // eslint-disable-next-line id-length
          target: { id: identifier }
        }
      } = primer;

      expect(identifier).toBe(setTargetId);
    });
  });

  describe('#start', (): void => {
    test(`expects an element with ${setTargetId} id, have been appended an element with ${setElementId} id in itself`, (): void => {
      const { element } = doc.makeElement({ tagName: ElementTag.DIV });
      VirtualDocument.setId({
        identifier: setElementId,
        source: element
      });
      VirtualDocument.setInnerHtml({
        innerHtml: 'inner-test',
        source: element
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
      const {
        isFound: isParentElementFound,
        // eslint-disable-next-line id-length
        parentElement: { id: parentElementId }
      } = VirtualDocument.getParentElement({ element: childElement });
      // eslint-disable-next-line id-length
      const { id: childElementId } = childElement;

      expect(isChildElementFound).toBeTruthy();
      expect(childElementId).toBe(setElementId);
      expect(isParentElementFound).toBeTruthy();
      expect(parentElementId).toBe(setTargetId);
    });
  });
});
