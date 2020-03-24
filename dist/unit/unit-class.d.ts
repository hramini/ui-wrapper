import { Properties } from '../ui-wrapper-expose';
import { IElement, IUnit, IUnitAlterStateIn, IUnitOnBeforeUpdateOut } from './unit-interface';
export declare abstract class Unit<T, P, S> implements IUnit<T, P, S> {
    props: Readonly<P> & Readonly<Properties<T>>;
    state: Readonly<S>;
    forceUpdate(): void;
    alterState<K extends keyof S>(param: IUnitAlterStateIn<S, K>): void;
    onBeforeProvide(): void;
    onAfterProvide(): void;
    onBeforeUpdate(): IUnitOnBeforeUpdateOut;
    onAfterUpdate(): void;
    onBeforeDispose(): void;
    abstract provide(): IElement<T>;
}
