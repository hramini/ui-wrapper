import { TDemoElement } from '../type/element-type';
import { IElement, IUnit, IUnitAlterStateOptions, IUnitOnBeforeUpdateCheck, IUnitSetPropertiesOptions } from './unit-interface';
export declare abstract class UnitDemo<P, S> implements IUnit<TDemoElement, P, S> {
    state: Readonly<S>;
    props: Readonly<P>;
    private provided;
    abstract provide(): IElement<TDemoElement>;
    onBeforeProvide(): void;
    onAfterProvide(): void;
    onBeforeUpdate(): IUnitOnBeforeUpdateCheck;
    onAfterUpdate(): void;
    onBeforeDispose(): void;
    forceUpdate(): void;
    alterState<K extends keyof S>(param: IUnitAlterStateOptions<S, K>): void;
    getProvided(): IElement<TDemoElement>;
    onProvide(): void;
    onUpdate(): void;
    setProperties(param: IUnitSetPropertiesOptions<P>): void;
}
