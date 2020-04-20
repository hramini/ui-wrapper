import { TDemoElement } from '../type/element-type';
import { UnitDemo } from '../unit/unit-demo-class';
import { IElement } from '../unit/unit-interface';
import {
  ICustomDemoProperties,
  ICustomDemoSetProvideTextIn,
  ICustomDemoStates
} from './custom-demo-interface';

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
