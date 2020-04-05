import { IElementOption } from '../type/element-option-interface';
import { IElement } from '../ui-wrapper-expose';
import { IBuilder, IBuilderGetFrameBuilderOut, IBuilderGetTagBuilderOut, IBuilderSetFrameBuilderIn, IBuilderSetTagBuilderIn } from './builder-interface';
export declare class Builder<T> implements IBuilder<T> {
    private static tagBuilderInstance;
    private static frameBuilderInstance;
    private readonly builder;
    private constructor();
    buildElement<P, S>(param: IElementOption<T, P, S>): IElement<T>;
    static setTagBuilder<K>(param: IBuilderSetTagBuilderIn<K>): void;
    static setFrameBuilder<K>(param: IBuilderSetFrameBuilderIn<K>): void;
    static getTagBuilder<K>(): IBuilderGetTagBuilderOut<K>;
    static getFrameBuilder<K>(): IBuilderGetFrameBuilderOut<K>;
}
