import { TDemoElement } from '../type/element-type';
import {
  ICustomDemoChangeShouldUpdateIn,
  ICustomDemoProperties,
  ICustomDemoSetProvideTextIn,
  ICustomDemoStates
} from './custom-demo-interface';
import { UnitDemo } from './unit-demo-class';
import { IElement, IUnitOnBeforeUpdateCheck } from './unit-interface';

export class CustomDemo extends UnitDemo<ICustomDemoProperties, ICustomDemoStates> {
  private provideText: string;
  private shouldUpdate: boolean;

  public constructor() {
    super();
    this.setProvideText({
      provideText: 'on-constructor'
    });
    this.changeShouldUpdate({ status: true });
  }

  public onBeforeProvide(): void {
    this.setProvideText({
      provideText: 'on-before-provide'
    });
  }

  public onAfterProvide(): void {
    this.setProvideText({
      provideText: 'on-after-provide'
    });
  }

  public onBeforeUpdate(): IUnitOnBeforeUpdateCheck {
    const { shouldUpdate } = this;
    this.setProvideText({
      provideText: 'on-before-update'
    });

    return { shouldUpdate };
  }

  public onAfterUpdate(): void {
    this.setProvideText({
      provideText: 'on-after-update'
    });
  }

  public onBeforeDispose(): void {
    this.setProvideText({
      provideText: 'on-before-dispose'
    });
  }

  public forceUpdate(): void {
    this.setProvideText({
      provideText: 'force-update'
    });
  }

  public provide(): IElement<TDemoElement> {
    const { provideText: element } = this;

    return { element };
  }

  public changeShouldUpdate(param: ICustomDemoChangeShouldUpdateIn): void {
    const { status } = param;
    this.shouldUpdate = status;
  }

  private setProvideText(param: ICustomDemoSetProvideTextIn): void {
    const { provideText } = param;
    this.provideText = provideText;
  }
}
