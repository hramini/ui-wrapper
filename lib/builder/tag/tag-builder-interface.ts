import { IElement } from '../../unit/unit-interface';
import { IElementOption } from '../builder-interface';

export interface ITagBuilder<T> {
  buildElement<P = never, RequiredP extends P = P>(
    param: ITagElementOption<T, RequiredP>
  ): IElement<T>;
}

export interface ITagElementOption<T, P> extends IElementOption<T, P> {
  name: string;
}

export interface ITagBuilderEntry<T> {
  TagBuilderConstructor: new () => ITagBuilder<T>;
}

export interface IBuilderSetTagBuilderIn<T> {
  tagBuilderClass: new () => ITagBuilder<T>;
}

export interface IBuilderGetTagBuilderOut<T> {
  tagBuilderInstance: ITagBuilder<T>;
}
