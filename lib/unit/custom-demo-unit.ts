import { TDemoElement } from '../type/element-type';
import { UnitDemo } from './unit-demo-class';
import { IElement, IUnitOnBeforeUpdateOut } from './unit-interface';

export class CustomDemo extends UnitDemo<any, any> {
  private provideText: string;
  private shouldUpdate: boolean;

  public constructor() {
    super();
    this.provideText = 'on-constructor';
    this.changeShouldUpdate({ status: true });
  }

  public onBeforeProvide(): void {
    this.provideText = 'on-before-provide';
  }

  public onAfterProvide(): void {
    this.provideText = 'on-after-provide';
  }

  public onBeforeUpdate(): IUnitOnBeforeUpdateOut {
    this.provideText = 'on-before-update';
    return { shouldUpdate: this.shouldUpdate };
  }

  public onAfterUpdate(): void {
    this.provideText = 'on-after-update';
  }

  public onBeforeDispose(): void {
    this.provideText = '';
  }

  public forceUpdate(): void {
    this.provideText = 'force-update';
  }

  public provide(): IElement<TDemoElement> {
    return { element: this.provideText };
  }

  public changeShouldUpdate(param: { status: boolean }): void {
    const { status } = param;
    this.shouldUpdate = status;
  }
}
