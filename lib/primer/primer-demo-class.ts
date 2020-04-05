import { TDemoElement } from '../type/element-type';
import { IPrimer, IPrimerElement, IPrimerTarget } from './primer-interface';

export class PrimerDemo implements IPrimer<TDemoElement> {
  public element: TDemoElement;
  public target: HTMLElement;

  public setElement(param: IPrimerElement<TDemoElement>): void {
    const { element } = param;
    this.element = element;
  }

  public setTarget(param: IPrimerTarget): void {
    const { target } = param;
    this.target = target;
  }

  public start(): void {
    this.target.innerHTML = this.element;
  }
}
