import { Builder } from '../builder/builder-class';
import { ITagBuilder } from '../builder/builder-interface';
import { TElement } from '../type/element-type';
import { Unit } from './unit-class';

export abstract class UnitTag<P, S> extends Unit<P, S> {
  protected builder: ITagBuilder<TElement>;

  public constructor() {
    super();
    const { tagBuilderClass } = this.getTagBuilder();
    this.builder = Builder.getTagBuilder<TElement>({ tagBuilderClass });
  }
}
