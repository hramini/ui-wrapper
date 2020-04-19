import { TDemoElement } from '../../type/element-type';
import { IElement, IUnit } from '../../unit/unit-interface';
import { IFrameBuilder, IFrameElementOption } from './frame-builder-interface';

export class FrameBuilderDemo implements IFrameBuilder<TDemoElement> {
  // eslint-disable-next-line class-methods-use-this
  public buildElement<P = never, S = never, RequiredP extends P = P, RequiredS extends S = S>(
    param: IFrameElementOption<TDemoElement, RequiredP, RequiredS>
  ): IElement<TDemoElement> {
    const { UnitConstructor } = param;
    const unit: IUnit<TDemoElement, P, S> = new UnitConstructor();
    const { element } = unit.provide();

    return { element };
  }
}
