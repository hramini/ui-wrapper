import { TDemoElement } from '../type/element-type';
import { Unit } from '../unit/unit-class';
import { IElement } from '../unit/unit-interface';
import { ICustomDemoProperties, ICustomDemoStates } from './custom-demo-interface';
export declare class CustomDemoSimple extends Unit<TDemoElement, ICustomDemoProperties, ICustomDemoStates> {
    private provideText;
    constructor();
    provide(): IElement<TDemoElement>;
    private setProvideText;
}
