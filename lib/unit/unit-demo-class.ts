import { TDemoElement } from '../type/element-type';
import { Unit } from './unit-class';
import { IElement } from './unit-interface';

export class UnitDemo<P, S> extends Unit<TDemoElement, P, S> {
  private readonly elementText: string;

  public constructor() {
    super();
    this.elementText = 'test-provide';
  }

  public provide(): IElement<TDemoElement> {
    const { elementText } = this;

    return { element: elementText };
  }
}
