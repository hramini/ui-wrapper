import { TDemoElement } from '../type/element-type';
import { UnitDemo } from '../unit/unit-demo-class';
import { IElement } from '../unit/unit-interface';
import { ICustomDemoProperties, ICustomDemoStates } from './custom-demo-interface';
export declare class CustomDemoSimple extends UnitDemo<ICustomDemoProperties, ICustomDemoStates> {
    private provideText;
    constructor();
    provide(): IElement<TDemoElement>;
    private setProvideText;
}
