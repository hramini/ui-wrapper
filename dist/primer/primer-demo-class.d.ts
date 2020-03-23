import { TDemoElement } from '../type/element-type';
import { IPrimer, PrimerStartOptions } from './primer-interface';
export declare class PrimerDemo implements IPrimer<TDemoElement> {
    start(param: PrimerStartOptions<TDemoElement>): void;
}
