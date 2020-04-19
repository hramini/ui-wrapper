import { IElement } from '../../unit/unit-interface';
import { IBuilderGetTagBuilderOut, IBuilderSetTagBuilderIn, ITagBuilder, ITagElementOption } from './tag-builder-interface';
export declare class TagBuilder<T> implements ITagBuilder<T> {
    private static tagBuilderInstance;
    private readonly builder;
    private constructor();
    buildElement<P = never, RequiredP extends P = P>(param: ITagElementOption<T, RequiredP>): IElement<T>;
    static setTagBuilder<K>(param: IBuilderSetTagBuilderIn<K>): void;
    static getTagBuilder<K>(): IBuilderGetTagBuilderOut<K>;
}
