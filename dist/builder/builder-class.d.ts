import { ElementOption } from '../type/element-option-interface';
import { IElement } from '../unit/unit-interface';
import { IBuilderGetFrameBuilderIn, IBuilderGetTagBuilderIn } from './builder-interface';
export declare class Builder<T> {
    private builder;
    private static tagBuilderInstance;
    private static frameBuilderInstance;
    private constructor();
    static getTagBuilder<K>(param: IBuilderGetTagBuilderIn<K>): Builder<K>;
    static getFrameBuilder<K>(param: IBuilderGetFrameBuilderIn<K>): Builder<K>;
    buildElement<P, S>(elementOption: ElementOption<T, P, S>): IElement<T>;
}
