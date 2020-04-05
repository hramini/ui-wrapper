import { IFrameElementOption } from '../type/element-option-interface';
import { TDemoElement } from '../type/element-type';
import { IElement, IUnit } from '../unit/unit-interface';
import { IFrameBuilder } from './builder-interface';

export class FrameBuilderDemo implements IFrameBuilder<TDemoElement> {
  // eslint-disable-next-line class-methods-use-this
  public buildElement<P, S>(
    param: IFrameElementOption<TDemoElement, P, S>
  ): IElement<TDemoElement> {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { name: UnitClass } = param;
    const unit: IUnit<TDemoElement, P, S> = new UnitClass();
    const { element } = unit.provide();

    return { element };
  }
}
