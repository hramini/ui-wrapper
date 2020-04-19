import { IElement, IUnit } from '../../unit/unit-interface';
import { IElementOption } from '../builder-interface';
export interface IFrameBuilder<T> {
    buildElement<P = never, S = never, RequiredP extends P = P, RequiredS extends S = S>(param: IFrameElementOption<T, RequiredP, RequiredS>): IElement<T>;
}
export interface IFrameElementOption<T, P, S> extends IElementOption<T, P> {
    UnitConstructor: new () => IUnit<T, P, S>;
}
export interface IFrameBuilderEntry<T> {
    FrameBuilderConstructor: new () => IFrameBuilder<T>;
}
export interface IBuilderSetFrameBuilderIn<T> {
    frameBuilderClass: new () => IFrameBuilder<T>;
}
export interface IBuilderGetFrameBuilderOut<T> {
    frameBuilderInstance: IFrameBuilder<T>;
}
