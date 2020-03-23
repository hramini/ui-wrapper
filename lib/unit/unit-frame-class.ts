import { Builder } from '../builder/builder-class';
import { IFrameBuilder } from '../builder/builder-interface';
import { TElement } from '../type/element-type';
import { Unit } from './unit-class';

export abstract class UnitFrame<P, S> extends Unit<P, S> {
  protected builder: IFrameBuilder<TElement>;

  public constructor() {
    super();
    const { frameBuilderClass } = this.getFrameBuilder();
    this.builder = Builder.getFrameBuilder<TElement>({ frameBuilderClass });
  }
}
