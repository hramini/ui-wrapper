/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable class-methods-use-this */
import {
  IBasicProperties,
  IElement,
  IUnit,
  IUnitAlterStateOptions,
  IUnitOnBeforeUpdateCheck
} from './unit-interface';

export abstract class Unit<T, P, S> implements IUnit<T, P, S> {
  public props: Readonly<P> & Readonly<IBasicProperties<T>>;
  public state: Readonly<S>;

  public forceUpdate(): void {}

  public alterState<K extends keyof S>(param: IUnitAlterStateOptions<S, K>): void {
    const { state } = param;
    this.state = { ...this.state, ...state };
  }

  public onBeforeProvide(): void {}
  public onAfterProvide(): void {}
  public onBeforeUpdate(): IUnitOnBeforeUpdateCheck {
    return { shouldUpdate: true };
  }

  public onAfterUpdate(): void {}
  public onBeforeDispose(): void {}

  public abstract provide(): IElement<T>;
}
