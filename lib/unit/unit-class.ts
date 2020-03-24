import { Properties } from '../ui-wrapper-expose';
import { IElement, IUnit, IUnitAlterStateIn, IUnitOnBeforeUpdateOut } from './unit-interface';

export abstract class Unit<T, P, S> implements IUnit<T, P, S> {
  public props: Readonly<P> & Readonly<Properties<T>>;
  public state: Readonly<S>;

  public forceUpdate(): void {}
  public alterState<K extends keyof S>(param: IUnitAlterStateIn<S, K>): void {
    const { state } = param;
    this.state = { ...this.state, ...state };
  }
  public onBeforeProvide(): void {}
  public onAfterProvide(): void {}
  public onBeforeUpdate(): IUnitOnBeforeUpdateOut {
    return { shouldUpdate: true };
  }
  public onAfterUpdate(): void {}
  public onBeforeDispose(): void {}

  public abstract provide(): IElement<T>;
}
