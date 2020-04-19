import { IElement } from '../../unit/unit-interface';
import {
  IBuilderGetTagBuilderOut,
  IBuilderSetTagBuilderIn,
  ITagBuilder,
  ITagBuilderEntry,
  ITagElementOption
} from './tag-builder-interface';

export class TagBuilder<T> implements ITagBuilder<T> {
  // HACK: these properties will never get any type as its generic type cause the setter methods are getting a required type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static tagBuilderInstance: TagBuilder<any>;
  private readonly builder: ITagBuilder<T>;

  private constructor(entry: ITagBuilderEntry<T>) {
    const { TagBuilderConstructor } = entry;
    this.builder = new TagBuilderConstructor();
  }

  public buildElement<P = never, RequiredP extends P = P>(
    param: ITagElementOption<T, RequiredP>
  ): IElement<T> {
    const { name, properties, children } = param;
    const { element } = this.builder.buildElement<RequiredP>({ children, name, properties });

    return { element };
  }

  public static setTagBuilder<K>(param: IBuilderSetTagBuilderIn<K>): void {
    const { tagBuilderClass } = param;
    TagBuilder.tagBuilderInstance = new TagBuilder<K>({ TagBuilderConstructor: tagBuilderClass });
  }

  public static getTagBuilder<K>(): IBuilderGetTagBuilderOut<K> {
    const { tagBuilderInstance } = TagBuilder;

    return { tagBuilderInstance };
  }
}
