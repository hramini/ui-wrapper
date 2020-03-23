import { IFrameBuilder, ITagBuilder } from '../builder/builder-interface';
import { Properties } from '../type/properties-interface';
import { PickState } from '../type/states-interface';

export interface IUnitLifeCycle {
  onBeforeProvide(): void;
  onAfterProvide(): void;
  onBeforeUpdate(): IUnitOnBeforeUpdateOut;
  onAfterUpdate(): void;
  onBeforeDispose(): void;
}

export interface IUnitBuilder<T> {
  getTagBuilder(): IUnitGetTagBuilderOut<T>;
  getFrameBuilder(): IUnitGetFrameBuilderOut<T>;
}

export interface IUnit<T, P, S> extends IUnitLifeCycle, IUnitBuilder<T> {
  provide(): IElement<T>;
  forceUpdate(): void;
  alterState<K extends keyof S>(param: IUnitAlterStateIn<S, K>): void;
  props: Readonly<P> & Readonly<Properties<T>>;
  state: Readonly<S>;
}

export interface IUnitAlterStateIn<S, K extends keyof S> {
  state: PickState<S, K>;
  callback?: () => void;
}

export interface IUnitOnBeforeUpdateOut {
  shouldUpdate: boolean;
}

export interface IElement<T> {
  element: T;
}

export interface IUnitSetPropsIn<P> {
  properties: P;
}

export interface IUnitGetTagBuilderOut<T> {
  tagBuilderClass: new () => ITagBuilder<T>;
}

export interface IUnitGetFrameBuilderOut<T> {
  frameBuilderClass: new () => IFrameBuilder<T>;
}
