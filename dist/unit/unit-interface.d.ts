import { IBasicProperties } from '../type/properties-interface';
import { PickState } from '../type/states-interface';
export interface IUnitLifeCycle {
    onBeforeProvide(): void;
    onAfterProvide(): void;
    onBeforeUpdate(): IUnitOnBeforeUpdateCheck;
    onAfterUpdate(): void;
    onBeforeDispose(): void;
}
export interface IUnit<T, P, S> extends IUnitLifeCycle {
    provide(): IElement<T>;
    forceUpdate(): void;
    alterState<K extends keyof S>(param: IUnitAlterStateOptions<S, K>): void;
    props: Readonly<P> & Readonly<IBasicProperties<T>>;
    state: Readonly<S>;
}
export interface IUnitAlterStateOptions<S, K extends keyof S> {
    state: PickState<S, K>;
    callbackFunction?: () => void;
}
export interface IUnitOnBeforeUpdateCheck {
    shouldUpdate: boolean;
}
export interface IElement<T> {
    element: T;
}
export interface IUnitSetPropertiesOptions<P> {
    properties: P;
}
