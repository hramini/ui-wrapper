import {
  ElementOption,
  FrameElementOption,
  TagElementOption
} from '../type/element-option-interface';
import { IElement } from '../unit/unit-interface';

export interface IBuilder<T> {
  buildElement<P, S>(elementOption: ElementOption<T, P, S>): IElement<T>;
}

export interface ITagBuilder<T> extends IBuilder<T> {
  buildElement<P, S>(elementOption: TagElementOption<T, P, S>): IElement<T>;
}

export interface IFrameBuilder<T> extends IBuilder<T> {
  buildElement<P, S>(elementOption: FrameElementOption<T, P, S>): IElement<T>;
}

export interface IBuilderEntry<T> {
  builder: new () => IBuilder<T>;
}

// export interface IBuilderSetBuildersIn<T> {
//   tagBuilder: new () => ITagBuilder<T>;
//   frameBuilder: new () => IFrameBuilder<T>;
// }

export interface IBuilderGetTagBuilderIn<T> {
  tagBuilderClass: new () => ITagBuilder<T>;
}

export interface IBuilderGetTagBuilderOut<T> {
  tagBuilder: ITagBuilder<T>;
}

export interface IBuilderGetFrameBuilderIn<T> {
  frameBuilderClass: new () => IFrameBuilder<T>;
}

export interface IBuilderGetFrameBuilderOut<T> {
  frameBuilder: IFrameBuilder<T>;
}
