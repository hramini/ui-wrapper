import { IFrameBuilder } from '../builder/builder-interface';
import { IFrameElementOption } from '../type/element-option-interface';
import { Unit } from './unit-class';
import { IElement } from './unit-interface';
export declare abstract class UnitFrame<T, P, S> extends Unit<T, P, S> {
    protected builder: IFrameBuilder<T>;
    constructor();
    protected buildElement<K, R>(param: IFrameElementOption<T, K, R>): IElement<T>;
}
