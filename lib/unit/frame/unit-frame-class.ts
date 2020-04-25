import { FrameBuilder } from '../../builder/frame/frame-builder-class';
import { IFrameBuilder } from '../../builder/frame/frame-builder-interface';
import { Unit } from '../unit-class';

export abstract class UnitFrame<T, P, S> extends Unit<T, P, S> {
  protected builder: IFrameBuilder<T>;

  public constructor() {
    super();
    const { frameBuilderInstance } = FrameBuilder.getFrameBuilder<T>();
    this.builder = frameBuilderInstance;
  }
}
