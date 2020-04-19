import { TagBuilder } from '../builder/tag/tag-builder-class';
import { ITagBuilder } from '../builder/tag/tag-builder-interface';
import { Unit } from './unit-class';

export abstract class UnitTag<T, P, S> extends Unit<T, P, S> {
  protected builder: ITagBuilder<T>;

  public constructor() {
    super();
    const { tagBuilderInstance } = TagBuilder.getTagBuilder<T>();
    this.builder = tagBuilderInstance;
  }
}
