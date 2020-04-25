import { TDemoElement } from '../type/element-type';
import { Unit } from '../unit/unit-class';
import { IElement, IUnitOnBeforeUpdateCheck } from '../unit/unit-interface';
import { ICustomDemoChangeShouldUpdateIn, ICustomDemoProperties, ICustomDemoStates } from './custom-demo-interface';
export declare class CustomDemo extends Unit<TDemoElement, ICustomDemoProperties, ICustomDemoStates> {
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
