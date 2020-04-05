import { IElementOption } from '../type/element-option-interface';
import { IElement } from '../ui-wrapper-expose';
import {
  IBuilder,
  IBuilderEntry,
  IBuilderGetFrameBuilderOut,
  IBuilderGetTagBuilderOut,
  IBuilderSetFrameBuilderIn,
  IBuilderSetTagBuilderIn
} from './builder-interface';

export class Builder<T> implements IBuilder<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static tagBuilderInstance: Builder<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static frameBuilderInstance: Builder<any>;
  private readonly builder: IBuilder<T>;

  private constructor(entry: IBuilderEntry<T>) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { BuilderClass } = entry;
    this.builder = new BuilderClass();
  }

  public buildElement<P, S>(param: IElementOption<T, P, S>): IElement<T> {
    const { name, properties, children } = param;
    const { element } = this.builder.buildElement<P, S>({ name, properties, children });

    return { element };
  }

  public static setTagBuilder<K>(param: IBuilderSetTagBuilderIn<K>): void {
    const { tagBuilderClass } = param;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Builder.tagBuilderInstance = new Builder<K>({ BuilderClass: tagBuilderClass });
  }

  public static setFrameBuilder<K>(param: IBuilderSetFrameBuilderIn<K>): void {
    const { frameBuilderClass } = param;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Builder.frameBuilderInstance = new Builder<K>({ BuilderClass: frameBuilderClass });
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
