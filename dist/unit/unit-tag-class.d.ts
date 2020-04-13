import { ITagBuilder, ITagElementOption } from '../builder/builder-interface';
import { Unit } from './unit-class';
import { IElement } from './unit-interface';
export declare abstract class UnitTag<T, P, S> extends Unit<T, P, S> {
    protected builder: ITagBuilder<T>;
    constructor();
    protected buildElement<K, R>(param: ITagElementOption<T, K, R>): IElement<T>;
}
