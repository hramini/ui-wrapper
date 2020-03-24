import { IPrimer, IPrimerEntry, PrimerElement, PrimerTarget } from './primer-interface';

export class Primer<T> {
  private entryPrimer: IPrimer<T>;
  private element: T;
  private target: HTMLElement;

  public constructor(entry: IPrimerEntry<T>) {
    const { primer: primerClass } = entry;
    this.entryPrimer = new primerClass();
  }

  public getElement(): PrimerElement<T> {
    return { element: this.element };
  }

  public setElement(param: PrimerElement<T>): void {
    const { element } = param;
    this.element = element;
  }

  public getTarget(): PrimerTarget {
    return { target: this.target };
  }

  public setTarget(param: PrimerTarget): void {
    const { target } = param;
    this.target = target;
  }

  public start(): void {
    const { element } = this.getElement();
    const { target } = this.getTarget();
    this.entryPrimer.start({
      element,
      target
    });
  }
}
