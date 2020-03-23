import { TDemoElement } from '../type/element-type';
import { UnitDemo } from './unit-demo-class';
import { IElement } from './unit-interface';
export declare class CustomDemoSimple extends UnitDemo<any, any> {
    private provideText;
    constructor();
    provide(): IElement<TDemoElement>;
}
