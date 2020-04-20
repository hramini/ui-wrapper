import { TDemoElement } from '../type/element-type';
import { UnitDemo } from '../unit/unit-demo-class';
import { IElement, IUnitOnBeforeUpdateCheck } from '../unit/unit-interface';
import { ICustomDemoChangeShouldUpdateIn, ICustomDemoProperties, ICustomDemoStates } from './custom-demo-interface';
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
