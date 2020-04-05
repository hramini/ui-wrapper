import { TDemoElement } from '../type/element-type';
import { ICustomDemoProperties, ICustomDemoStates } from './custom-demo-interface';
import { UnitDemo } from './unit-demo-class';
import { IElement } from './unit-interface';
export declare class CustomDemoSimple extends UnitDemo<ICustomDemoProperties, ICustomDemoStates> {
    private provideText;
    constructor();
    provide(): IElement<TDemoElement>;
    private setProvideText;
}
