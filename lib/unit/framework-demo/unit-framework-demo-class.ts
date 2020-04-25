/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable class-methods-use-this */
import { TDemoElement } from '../../type/element-type';
import {
  IBasicProperties,
  IElement,
  IUnit,
  IUnitAlterStateOptions,
  IUnitOnBeforeUpdateCheck
} from '../unit-interface';

export class UnitFramework<P, S> implements IUnit<TDemoElement, P, S> {
  public props: Readonly<P> & Readonly<IBasicProperties<TDemoElement>>;
  public state: Readonly<S>;

  public provide(): IElement<TDemoElement> {
    return { element: '' };
  }

  public forceUpdate(): void {}

  public alterState<K extends keyof S>(param: IUnitAlterStateOptions<S, K>): void {
    const { state, callbackFunction } = param;
    this.state = { ...this.state, ...state };
    callbackFunction?.();
  }

  public onBeforeProvide(): void {}
  public onAfterProvide(): void {}
  public onBeforeUpdate(): IUnitOnBeforeUpdateCheck {
    return { shouldUpdate: true };
  }

  public onAfterUpdate(): void {}
  public onBeforeDispose(): void {}
}
