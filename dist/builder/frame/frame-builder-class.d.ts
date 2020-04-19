import { IElement, IFrameElementOption } from '../../ui-wrapper-expose';
import { IBuilderGetFrameBuilderOut, IBuilderSetFrameBuilderIn, IFrameBuilder } from './frame-builder-interface';
export declare class FrameBuilder<T> implements IFrameBuilder<T> {
    private static frameBuilderInstance;
    private readonly frameBuilder;
    private constructor();
    buildElement<P = never, S = never, RequiredP extends P = P, RequiredS extends S = S>(param: IFrameElementOption<T, RequiredP, RequiredS>): IElement<T>;
    static setFrameBuilder<K>(param: IBuilderSetFrameBuilderIn<K>): void;
    static getFrameBuilder<K>(): IBuilderGetFrameBuilderOut<K>;
}
