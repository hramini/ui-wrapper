import { TDemoElement } from '../type/element-type';
import { IUnit } from '../unit/unit-interface';
import { IPrimer, IPrimerElement, IPrimerTarget, IPrimerUnitPrototype } from './primer-interface';
export declare class PrimerDemo implements IPrimer<TDemoElement> {
    element: TDemoElement;
    target: HTMLElement;
    readonly unitPrototype: IUnit<TDemoElement, unknown, unknown>;
    constructor();
    getUnitPrototype(): IPrimerUnitPrototype<TDemoElement>;
    setElement(param: IPrimerElement<TDemoElement>): void;
    setTarget(param: IPrimerTarget): void;
    start(): void;
}
