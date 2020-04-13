import { Builder } from '../builder/builder-class';
import { IFrameBuilder, IFrameElementOption } from '../builder/builder-interface';
import { Unit } from './unit-class';
import { IElement } from './unit-interface';

export abstract class UnitFrame<T, P, S> extends Unit<T, P, S> {
  protected builder: IFrameBuilder<T>;

  public constructor() {
    super();
    const { frameBuilderInstance } = Builder.getFrameBuilder<T>();
    this.builder = frameBuilderInstance;
  }

  protected buildElement<K, R>(param: IFrameElementOption<T, K, R>): IElement<T> {
    const { name, properties, children } = param;
    const { element } = this.builder.buildElement<K, R>({ children, name, properties });

    return { element };
  }
}
