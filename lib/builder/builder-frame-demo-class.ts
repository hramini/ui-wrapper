import { FrameElementOption } from '../type/element-option-interface';
import { TDemoElement } from '../type/element-type';
import { IElement, IUnit } from '../unit/unit-interface';
import { IFrameBuilder } from './builder-interface';

export class FrameBuilderDemo implements IFrameBuilder<TDemoElement> {
  public buildElement<P, S>(
    elementOption: FrameElementOption<TDemoElement, P, S>
  ): IElement<TDemoElement> {
    const { name } = elementOption;
    const unit: IUnit<TDemoElement, P, S> = new name();
    const { element } = unit.provide();
    return { element };
  }
}
