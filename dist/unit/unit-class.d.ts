import { IBasicProperties } from '../type/properties-interface';
import { IElement, IUnit, IUnitAlterStateOptions, IUnitOnBeforeUpdateCheck } from './unit-interface';
export declare abstract class Unit<T, P, S> implements IUnit<T, P, S> {
    props: Readonly<P> & Readonly<IBasicProperties<T>>;
    state: Readonly<S>;
    forceUpdate(): void;
    alterState<K extends keyof S>(param: IUnitAlterStateOptions<S, K>): void;
    onBeforeProvide(): void;
    onAfterProvide(): void;
    onBeforeUpdate(): IUnitOnBeforeUpdateCheck;
    onAfterUpdate(): void;
    onBeforeDispose(): void;
    abstract provide(): IElement<T>;
}
