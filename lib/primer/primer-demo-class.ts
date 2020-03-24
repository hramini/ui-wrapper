import { TDemoElement } from '../type/element-type';
import { IPrimer, PrimerStartOptions } from './primer-interface';

export class PrimerDemo implements IPrimer<TDemoElement> {
  start(param: PrimerStartOptions<TDemoElement>): void {
    const { element, target } = param;
    target.innerHTML = element;
  }
}
