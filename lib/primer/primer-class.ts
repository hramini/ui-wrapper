import { IPrimer, IPrimerElement, IPrimerEntry, IPrimerTarget } from './primer-interface';

export class Primer<T> {
  public readonly entryPrimer: IPrimer<T>;

  public constructor(entry: IPrimerEntry<T>) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { PrimerClass } = entry;
    this.entryPrimer = new PrimerClass();
  }

  public setElement(param: IPrimerElement<T>): void {
    const { element } = param;
    this.entryPrimer.setElement({
      element
    });
  }

  public setTarget(param: IPrimerTarget): void {
    const { target } = param;
    this.entryPrimer.setTarget({
      target
    });
  }

  public start(): void {
    this.entryPrimer.start();
  }
}
