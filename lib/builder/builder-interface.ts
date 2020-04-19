import { IElement, IUnit } from '../unit/unit-interface';

export interface IBuilder<T> {
  buildElement<P, S>(elementOption: IElementOption<T, P, S>): IElement<T>;
}

export interface ITagBuilder<T> extends IBuilder<T> {
  buildElement<P, S>(elementOption: ITagElementOption<T, P, S>): IElement<T>;
}

export interface IFrameBuilder<T> extends IBuilder<T> {
  buildElement<P, S>(elementOption: IFrameElementOption<T, P, S>): IElement<T>;
}

export interface IElementOption<T, P, S> {
  name: string | (new () => IUnit<T, P, S>);
  properties: P;
  children?: (string | T)[];
}

export interface ITagElementOption<T, P, S> extends IElementOption<T, P, S> {
  name: string;
}

export interface IFrameElementOption<T, P, S> extends IElementOption<T, P, S> {
  name: new () => IUnit<T, P, S>;
}

export interface IBuilderEntry<T> {
  BuilderConstructor: new () => IBuilder<T>;
}

export interface IBuilderSetTagBuilderIn<T> {
  tagBuilderClass: new () => ITagBuilder<T>;
}

export interface IBuilderSetFrameBuilderIn<T> {
  frameBuilderClass: new () => IFrameBuilder<T>;
}

export interface IBuilderGetTagBuilderOut<T> {
  tagBuilderInstance: ITagBuilder<T>;
}

export interface IBuilderGetFrameBuilderOut<T> {
  frameBuilderInstance: IFrameBuilder<T>;
}
