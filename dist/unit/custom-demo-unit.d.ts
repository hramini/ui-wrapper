import { TDemoElement } from '../type/element-type';
import { ICustomDemoChangeShouldUpdateIn, ICustomDemoProperties, ICustomDemoStates } from './custom-demo-interface';
import { UnitDemo } from './unit-demo-class';
import { IElement, IUnitOnBeforeUpdateCheck } from './unit-interface';
export declare class CustomDemo extends UnitDemo<ICustomDemoProperties, ICustomDemoStates> {
    private provideText;
    private shouldUpdate;
    constructor();
    onBeforeProvide(): void;
    onAfterProvide(): void;
    onBeforeUpdate(): IUnitOnBeforeUpdateCheck;
    onAfterUpdate(): void;
    onBeforeDispose(): void;
    forceUpdate(): void;
    provide(): IElement<TDemoElement>;
    changeShouldUpdate(param: ICustomDemoChangeShouldUpdateIn): void;
    private setProvideText;
}
