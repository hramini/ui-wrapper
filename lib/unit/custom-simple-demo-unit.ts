import { TDemoElement } from '../type/element-type';
import {
  ICustomDemoProperties,
  ICustomDemoSetProvideTextIn,
  ICustomDemoStates
} from './custom-demo-interface';
import { UnitDemo } from './unit-demo-class';
import { IElement } from './unit-interface';

export class CustomDemoSimple extends UnitDemo<ICustomDemoProperties, ICustomDemoStates> {
  private provideText: string;

  public constructor() {
    super();
    this.setProvideText({
      provideText: 'on-constructor'
    });
  }

  public provide(): IElement<TDemoElement> {
    const { provideText: element } = this;

    return { element };
  }

  private setProvideText(param: ICustomDemoSetProvideTextIn): void {
    const { provideText } = param;
    this.provideText = provideText;
  }
}
