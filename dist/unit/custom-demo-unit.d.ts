import { TDemoElement } from '../type/element-type';
import { UnitDemo } from './unit-demo-class';
import { IElement, IUnitOnBeforeUpdateOut } from './unit-interface';
export declare class CustomDemo extends UnitDemo<any, any> {
    private provideText;
    private shouldUpdate;
    constructor();
    onBeforeProvide(): void;
    onAfterProvide(): void;
    onBeforeUpdate(): IUnitOnBeforeUpdateOut;
    onAfterUpdate(): void;
    onBeforeDispose(): void;
    forceUpdate(): void;
    provide(): IElement<TDemoElement>;
    changeShouldUpdate(param: {
        status: boolean;
    }): void;
}
