import { FrameBuilderDemo } from '../builder/builder-frame-demo-class';
import { TagBuilderDemo } from '../builder/builder-tag-demo-class';
import { TDemoElement } from '../type/element-type';
import {
  IElement,
  IUnit,
  IUnitAlterStateIn,
  IUnitGetFrameBuilderOut,
  IUnitGetTagBuilderOut,
  IUnitOnBeforeUpdateOut,
  IUnitSetPropsIn
} from './unit-interface';

export abstract class UnitDemo<P, S> implements IUnit<TDemoElement, P, S> {
  private provided: TDemoElement;

  protected constructor() {}

  public state: Readonly<S>;
  public props: Readonly<P>;
  public onBeforeProvide(): void {}
  public onAfterProvide(): void {}
  public onBeforeUpdate(): IUnitOnBeforeUpdateOut {
    return { shouldUpdate: true };
  }
  public onAfterUpdate(): void {}
  public onBeforeDispose(): void {}
  public abstract provide(): IElement<TDemoElement>;
  public forceUpdate(): void {}
  public alterState<K extends keyof S>(param: IUnitAlterStateIn<S, K>): void {
    const { state, callback } = param;
    this.state = { ...this.state, ...state };
    callback && callback();
  }

  public getProvided(): IElement<TDemoElement> {
    const element: TDemoElement = this.provided;
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

  public setProps(param: IUnitSetPropsIn<P>): void {
    const { properties } = param;
    this.props = properties;
  }

  public getTagBuilder(): IUnitGetTagBuilderOut<TDemoElement> {
    return { tagBuilderClass: TagBuilderDemo };
  }

  public getFrameBuilder(): IUnitGetFrameBuilderOut<TDemoElement> {
    return { frameBuilderClass: FrameBuilderDemo };
  }
}
