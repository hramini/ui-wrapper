import { TDemoElement } from '../type/element-type';
import { UnitFramework } from '../unit/framework-demo/unit-framework-demo-class';
import { IUnit } from '../unit/unit-interface';
import { IPrimer, IPrimerElement, IPrimerTarget, IPrimerUnitPrototype } from './primer-interface';

export class PrimerDemo implements IPrimer<TDemoElement> {
  public element: TDemoElement;
  public target: HTMLElement;
  public readonly unitPrototype: IUnit<TDemoElement, unknown, unknown>;

  public constructor() {
    this.unitPrototype = UnitFramework.prototype;
  }

  public getUnitPrototype(): IPrimerUnitPrototype<TDemoElement> {
    const { unitPrototype } = this;

    return { unitPrototype };
  }

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
