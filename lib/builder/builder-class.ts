import { IElement } from '../ui-wrapper-expose';
import {
  IBuilder,
  IBuilderEntry,
  IBuilderGetFrameBuilderOut,
  IBuilderGetTagBuilderOut,
  IBuilderSetFrameBuilderIn,
  IBuilderSetTagBuilderIn,
  IElementOption
} from './builder-interface';

export class Builder<T> implements IBuilder<T> {
  // HACK: these properties will never get any type as its generic type cause the setter methods are getting a required type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static tagBuilderInstance: Builder<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static frameBuilderInstance: Builder<any>;
  private readonly builder: IBuilder<T>;

  private constructor(entry: IBuilderEntry<T>) {
    const { BuilderConstructor } = entry;
    this.builder = new BuilderConstructor();
  }

  public buildElement<P, S>(param: IElementOption<T, P, S>): IElement<T> {
    const { name, properties, children } = param;
    const { element } = this.builder.buildElement<P, S>({ children, name, properties });

    return { element };
  }

  public static setTagBuilder<K>(param: IBuilderSetTagBuilderIn<K>): void {
    const { tagBuilderClass } = param;
    Builder.tagBuilderInstance = new Builder<K>({ BuilderConstructor: tagBuilderClass });
  }

  public static setFrameBuilder<K>(param: IBuilderSetFrameBuilderIn<K>): void {
    const { frameBuilderClass } = param;
    Builder.frameBuilderInstance = new Builder<K>({ BuilderConstructor: frameBuilderClass });
  }

  public static getTagBuilder<K>(): IBuilderGetTagBuilderOut<K> {
    const { tagBuilderInstance } = Builder;

    return { tagBuilderInstance };
  }

  public static getFrameBuilder<K>(): IBuilderGetFrameBuilderOut<K> {
    const { frameBuilderInstance } = Builder;

    return { frameBuilderInstance };
  }
}
