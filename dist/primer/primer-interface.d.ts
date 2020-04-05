export interface IPrimer<T> {
    element: T;
    target: HTMLElement;
    setElement(param: IPrimerElement<T>): void;
    setTarget(param: IPrimerTarget): void;
    start(): void;
}
export interface IPrimerEntry<T> {
    PrimerClass: new () => IPrimer<T>;
}
export interface IPrimerElement<T> {
    element: T;
}
export interface IPrimerTarget {
    target: HTMLElement;
}
