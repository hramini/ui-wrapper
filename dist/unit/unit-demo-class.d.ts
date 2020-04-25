import { TDemoElement } from '../type/element-type';
import { Unit } from './unit-class';
import { IElement } from './unit-interface';
export declare class UnitDemo<P, S> extends Unit<TDemoElement, P, S> {
    private readonly elementText;
    constructor();
    provide(): IElement<TDemoElement>;
}
