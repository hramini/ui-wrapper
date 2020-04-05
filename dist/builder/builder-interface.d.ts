import { IElementOption, IFrameElementOption, ITagElementOption } from '../type/element-option-interface';
import { IElement } from '../unit/unit-interface';
export interface IBuilder<T> {
    buildElement<P, S>(elementOption: IElementOption<T, P, S>): IElement<T>;
}
export interface ITagBuilder<T> extends IBuilder<T> {
    buildElement<P, S>(elementOption: ITagElementOption<T, P, S>): IElement<T>;
}
export interface IFrameBuilder<T> extends IBuilder<T> {
    buildElement<P, S>(elementOption: IFrameElementOption<T, P, S>): IElement<T>;
}
export interface IBuilderEntry<T> {
    BuilderClass: new () => IBuilder<T>;
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
