import { TDemoElement } from '../type/element-type';
import { IElement, IUnit } from '../unit/unit-interface';
import { IFrameBuilder, IFrameElementOption } from './builder-interface';

export class FrameBuilderDemo implements IFrameBuilder<TDemoElement> {
  // eslint-disable-next-line class-methods-use-this
  public buildElement<P, S>(
    param: IFrameElementOption<TDemoElement, P, S>
  ): IElement<TDemoElement> {
    const { name: UnitConstructor } = param;
    const unit: IUnit<TDemoElement, P, S> = new UnitConstructor();
    const { element } = unit.provide();

    return { element };
  }
}
