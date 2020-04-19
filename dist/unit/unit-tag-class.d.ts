import { ITagBuilder } from '../builder/tag/tag-builder-interface';
import { Unit } from './unit-class';
export declare abstract class UnitTag<T, P, S> extends Unit<T, P, S> {
    protected builder: ITagBuilder<T>;
    constructor();
}
