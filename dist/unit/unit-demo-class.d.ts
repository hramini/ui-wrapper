import { TDemoElement } from '../type/element-type';
import { IElement, IUnit, IUnitAlterStateIn, IUnitGetFrameBuilderOut, IUnitGetTagBuilderOut, IUnitOnBeforeUpdateOut, IUnitSetPropsIn } from './unit-interface';
export declare abstract class UnitDemo<P, S> implements IUnit<TDemoElement, P, S> {
    private provided;
    protected constructor();
    state: Readonly<S>;
    props: Readonly<P>;
    onBeforeProvide(): void;
    onAfterProvide(): void;
    onBeforeUpdate(): IUnitOnBeforeUpdateOut;
    onAfterUpdate(): void;
    onBeforeDispose(): void;
    abstract provide(): IElement<TDemoElement>;
    forceUpdate(): void;
    alterState<K extends keyof S>(param: IUnitAlterStateIn<S, K>): void;
    getProvided(): IElement<TDemoElement>;
    onProvide(): void;
    onUpdate(): void;
    setProps(param: IUnitSetPropsIn<P>): void;
    getTagBuilder(): IUnitGetTagBuilderOut<TDemoElement>;
    getFrameBuilder(): IUnitGetFrameBuilderOut<TDemoElement>;
}
