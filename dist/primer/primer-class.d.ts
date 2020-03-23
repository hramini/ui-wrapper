import { IPrimerEntry, PrimerElement, PrimerTarget } from './primer-interface';
export declare class Primer<T> {
    private entryPrimer;
    private element;
    private target;
    constructor(entry: IPrimerEntry<T>);
    getElement(): PrimerElement<T>;
    setElement(param: PrimerElement<T>): void;
    getTarget(): PrimerTarget;
    setTarget(param: PrimerTarget): void;
    start(): void;
}
