import { ITagBuilder } from '../builder/builder-interface';
import { TElement } from '../type/element-type';
import { Unit } from './unit-class';
export declare abstract class UnitTag<P, S> extends Unit<P, S> {
    protected builder: ITagBuilder<TElement>;
    constructor();
}
