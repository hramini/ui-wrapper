import { IBasicProperties, IElement, IUnit, IUnitAlterStateOptions, IUnitOnBeforeUpdateCheck } from './unit-interface';
export declare abstract class Unit<T, P, S> implements IUnit<T, P, S> {
    props: Readonly<P> & Readonly<IBasicProperties<T>>;
    state: Readonly<S>;
    abstract provide(): IElement<T>;
    forceUpdate(): void;
    alterState<K extends keyof S>(param: IUnitAlterStateOptions<S, K>): void;
    onBeforeProvide(): void;
    onAfterProvide(): void;
    onBeforeUpdate(): IUnitOnBeforeUpdateCheck;
    onAfterUpdate(): void;
    onBeforeDispose(): void;
}
