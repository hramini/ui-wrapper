/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable class-methods-use-this */
import { TDemoElement } from '../type/element-type';
import {
  IElement,
  IUnit,
  IUnitAlterStateOptions,
  IUnitOnBeforeUpdateCheck,
  IUnitSetPropertiesOptions
} from './unit-interface';

export abstract class UnitDemo<P, S> implements IUnit<TDemoElement, P, S> {
  public state: Readonly<S>;
  public props: Readonly<P>;
  private provided: TDemoElement;

  public onBeforeProvide(): void {}
  public onAfterProvide(): void {}
  public onBeforeUpdate(): IUnitOnBeforeUpdateCheck {
    return { shouldUpdate: true };
  }

  public onAfterUpdate(): void {}
  public onBeforeDispose(): void {}
  public forceUpdate(): void {}
  public alterState<K extends keyof S>(param: IUnitAlterStateOptions<S, K>): void {
    const { state, callbackFunction } = param;
    this.state = { ...this.state, ...state };
    callbackFunction?.();
  }

  public getProvided(): IElement<TDemoElement> {
    const { provided: element } = this;

    return { element };
  }

  public onProvide(): void {
    this.onBeforeProvide();
    const { element } = this.provide();
    this.provided = element;
    this.onAfterProvide();
  }

  public onUpdate(): void {
    const { shouldUpdate } = this.onBeforeUpdate();

    if (shouldUpdate) {
      const { element } = this.provide();
      this.provided = element;
      this.onAfterUpdate();
    }
  }

  public setProperties(param: IUnitSetPropertiesOptions<P>): void {
    const { properties } = param;
    this.props = properties;
  }

  public abstract provide(): IElement<TDemoElement>;
}
