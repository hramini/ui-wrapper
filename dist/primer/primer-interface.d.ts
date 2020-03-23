export interface IPrimer<T> {
    start(param: PrimerStartOptions<T>): void;
}
export interface PrimerStartOptions<T> {
    element: T;
    target: HTMLElement;
}
export interface IPrimerEntry<T> {
    primer: new () => IPrimer<T>;
}
export interface PrimerElement<T> {
    element: T;
}
export interface PrimerTarget {
    target: HTMLElement;
}
