import { Builder } from '../builder/builder-class';
import { IFrameBuilder } from '../builder/builder-interface';
import { Unit } from './unit-class';

export abstract class UnitFrame<T, P, S> extends Unit<T, P, S> {
  protected builder: IFrameBuilder<T>;

  public constructor() {
    super();
    const { frameBuilderInstance } = Builder.getFrameBuilder<T>();
    this.builder = frameBuilderInstance;
  }
}
