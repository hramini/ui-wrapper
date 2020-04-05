import { ElementTag, VirtualDocument, VirtualDocumentDemo } from 'virtual-document';
import { TDemoElement } from '../type/element-type';
import { Primer } from './primer-class';
import { PrimerDemo } from './primer-demo-class';

describe('@Primer', (): void => {
  let doc: VirtualDocument;
  let documentDemo: VirtualDocumentDemo;
  let primer: Primer<TDemoElement>;
  beforeEach((): void => {
    doc = new VirtualDocument();
    documentDemo = new VirtualDocumentDemo({ virtualDocument: doc });
    documentDemo.createBase();
    // eslint-disable-next-line @typescript-eslint/naming-convention
    primer = new Primer<TDemoElement>({ PrimerClass: PrimerDemo });
  });

  describe('#setElement', (): void => {
    test('testing setElement using getElement', (): void => {
      const { element: setElementDiv } = doc.makeElement({ tagName: ElementTag.DIV });
      VirtualDocument.setId({ source: setElementDiv, identifier: 'set_element_div' });
      primer.setElement({ element: setElementDiv.outerHTML });

      const {
        entryPrimer: { element }
      } = primer;

      expect(element).toBe('<div id="set_element_div"/>');
    });
  });

  describe('#setTarget', (): void => {
    test('testing setTarget using getTarget', (): void => {
      const { element: setTargetElement } = doc.findElementById({ identifier: 'root' });
      primer.setTarget({ target: setTargetElement });
      const {
        entryPrimer: {
          // eslint-disable-next-line id-length
          target: { id: identifier }
        }
      } = primer;

      expect(identifier).toBe('root');
    });
  });

  describe('#start', (): void => {
    test('test appended element and its parent after start', (): void => {
      const { element } = doc.makeElement({ tagName: ElementTag.DIV });
      VirtualDocument.setId({
        source: element,
        identifier: 'element_for_start'
      });
      VirtualDocument.setInnerHtml({
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
      const {
        isFound: isParentElementFound,
        // eslint-disable-next-line id-length
        parentElement: { id: parentElementId }
      } = VirtualDocument.getParentElement({ element: childElement });
      const { tagName: childElementTagName } = childElement;

      expect(isChildElementFound).toBeTruthy();
      expect(childElementTagName).toBe('div');
      expect(isParentElementFound).toBeTruthy();
      expect(parentElementId).toBe('root');
    });
  });
});
