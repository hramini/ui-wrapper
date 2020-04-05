import { TDemoElement } from '../type/element-type';
import { IPrimer, IPrimerElement, IPrimerTarget } from './primer-interface';
export declare class PrimerDemo implements IPrimer<TDemoElement> {
    element: TDemoElement;
    target: HTMLElement;
    setElement(param: IPrimerElement<TDemoElement>): void;
    setTarget(param: IPrimerTarget): void;
    start(): void;
}
