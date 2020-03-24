import { Builder } from '../builder/builder-class';
import { ITagBuilder } from '../builder/builder-interface';
import { Unit } from './unit-class';

export abstract class UnitTag<T, P, S> extends Unit<T, P, S> {
  protected builder: ITagBuilder<T>;

  public constructor() {
    super();
    const { tagBuilderInstance } = Builder.getTagBuilder<T>();
    this.builder = tagBuilderInstance;
  }
}
