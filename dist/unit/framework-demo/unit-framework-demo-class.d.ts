import { TDemoElement } from '../../type/element-type';
import { IBasicProperties, IElement, IUnit, IUnitAlterStateOptions, IUnitOnBeforeUpdateCheck } from '../unit-interface';
export declare class UnitFramework<P, S> implements IUnit<TDemoElement, P, S> {
    props: Readonly<P> & Readonly<IBasicProperties<TDemoElement>>;
    state: Readonly<S>;
    provide(): IElement<TDemoElement>;
    forceUpdate(): void;
    alterState<K extends keyof S>(param: IUnitAlterStateOptions<S, K>): void;
    onBeforeProvide(): void;
    onAfterProvide(): void;
    onBeforeUpdate(): IUnitOnBeforeUpdateCheck;
    onAfterUpdate(): void;
    onBeforeDispose(): void;
}
