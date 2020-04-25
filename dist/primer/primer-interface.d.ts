import { IUnit } from '../unit/unit-interface';
export interface IPrimer<T> {
    element: T;
    target: HTMLElement;
    unitPrototype: IUnit<T, unknown, unknown>;
    getUnitPrototype(): IPrimerUnitPrototype<T>;
    setElement(param: IPrimerElement<T>): void;
    setTarget(param: IPrimerTarget): void;
    start(): void;
}
export interface IPrimerEntry<T> {
    PrimerConstructor: new () => IPrimer<T>;
}
export interface IPrimerElement<T> {
    element: T;
}
export interface IPrimerTarget {
    target: HTMLElement;
}
export interface IPrimerUnitPrototype<T> {
    unitPrototype: IUnit<T, unknown, unknown>;
}
