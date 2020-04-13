import { Builder } from '../builder/builder-class';
import { ITagBuilder, ITagElementOption } from '../builder/builder-interface';
import { Unit } from './unit-class';
import { IElement } from './unit-interface';

export abstract class UnitTag<T, P, S> extends Unit<T, P, S> {
  protected builder: ITagBuilder<T>;

  public constructor() {
    super();
    const { tagBuilderInstance } = Builder.getTagBuilder<T>();
    this.builder = tagBuilderInstance;
  }

  protected buildElement<K, R>(param: ITagElementOption<T, K, R>): IElement<T> {
    const { name, properties, children } = param;
    const { element } = this.builder.buildElement<K, R>({ children, name, properties });

    return { element };
  }
}
