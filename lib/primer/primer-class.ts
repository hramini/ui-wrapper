import { Unit } from '../unit/unit-class';
import { IPrimer, IPrimerElement, IPrimerEntry, IPrimerTarget } from './primer-interface';

export class Primer<T> {
  public readonly entryPrimer: IPrimer<T>;

  public constructor(entry: IPrimerEntry<T>) {
    const { PrimerConstructor } = entry;
    this.entryPrimer = new PrimerConstructor();

    const { unitPrototype } = this.entryPrimer.getUnitPrototype();
    Object.setPrototypeOf(Unit.prototype, unitPrototype);
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
