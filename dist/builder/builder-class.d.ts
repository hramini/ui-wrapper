import { ElementOption } from '../type/element-option-interface';
import { IElement } from '../unit/unit-interface';
import { IBuilderGetFrameBuilderOut, IBuilderGetTagBuilderOut, IBuilderSetFrameBuilderIn, IBuilderSetTagBuilderIn } from './builder-interface';
export declare class Builder<T> {
    private builder;
    private static tagBuilderInstance;
    private static frameBuilderInstance;
    private constructor();
    static setTagBuilder<K>(param: IBuilderSetTagBuilderIn<K>): void;
    static setFrameBuilder<K>(param: IBuilderSetFrameBuilderIn<K>): void;
    static getTagBuilder<K>(): IBuilderGetTagBuilderOut<K>;
    static getFrameBuilder<K>(): IBuilderGetFrameBuilderOut<K>;
    buildElement<P, S>(elementOption: ElementOption<T, P, S>): IElement<T>;
}
