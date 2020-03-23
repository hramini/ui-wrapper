import { TDemoElement } from '../type/element-type';
import { UnitDemo } from './unit-demo-class';
import { IElement } from './unit-interface';

export class CustomDemoSimple extends UnitDemo<any, any> {
  private provideText: string;

  public constructor() {
    super();
    this.provideText = 'on-constructor';
  }

  public provide(): IElement<TDemoElement> {
    return { element: this.provideText };
  }
}
