import { IPrimer, IPrimerElement, IPrimerEntry, IPrimerTarget } from './primer-interface';
export declare class Primer<T> {
    readonly entryPrimer: IPrimer<T>;
    constructor(entry: IPrimerEntry<T>);
    setElement(param: IPrimerElement<T>): void;
    setTarget(param: IPrimerTarget): void;
    start(): void;
}
