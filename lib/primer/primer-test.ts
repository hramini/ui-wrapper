import { TDemoElement } from '../type/element-type';
import { VirtualDocument } from '../virtual-document/virtual-document-class';
import { Primer } from './primer-class';
import { PrimerDemo } from './primer-demo-class';

describe('@Primer', () => {
  let doc: VirtualDocument;
  let primer: Primer<TDemoElement>;
  beforeAll(() => {
    doc = new VirtualDocument();
    doc.createBase();
    primer = new Primer<TDemoElement>({ primer: PrimerDemo });
  });

  // describe('#getTagBuilder', () => {
  //   test('get tag builder should be instance of TagBuilder', () => {
  //     const { tagBuilder } = primer.getTagBuilder();
  //     expect(new tagBuilder()).toBeInstanceOf(TagBuilderDemo);
  //   });
  // });

  // describe('#getFrameBuilder', () => {
  //   test('get frame builder should be instance of FrameBuilder', () => {
  //     const { frameBuilder } = primer.getFrameBuilder();
  //     expect(new frameBuilder()).toBeInstanceOf(FrameBuilderDemo);
  //   });
  // });

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
    let primerForStart: Primer<TDemoElement>;
    beforeAll(() => {
      primerForStart = new Primer<TDemoElement>({ primer: PrimerDemo });
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
