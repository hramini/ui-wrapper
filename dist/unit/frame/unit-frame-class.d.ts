import { IFrameBuilder } from '../../builder/frame/frame-builder-interface';
import { Unit } from '../unit-class';
export declare abstract class UnitFrame<T, P, S> extends Unit<T, P, S> {
    protected builder: IFrameBuilder<T>;
    constructor();
}
