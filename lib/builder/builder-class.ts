import { ElementOption } from '../type/element-option-interface';
import { IElement } from '../unit/unit-interface';
import {
  IBuilder,
  IBuilderEntry,
  IBuilderGetFrameBuilderOut,
  IBuilderGetTagBuilderOut,
  IBuilderSetFrameBuilderIn,
  IBuilderSetTagBuilderIn
} from './builder-interface';

export class Builder<T> {
  private builder: IBuilder<T>;
  private static tagBuilderInstance: Builder<any>;
  private static frameBuilderInstance: Builder<any>;

  private constructor(entry: IBuilderEntry<T>) {
    const { builder } = entry;
    this.builder = new builder();
  }

  public static setTagBuilder<K>(param: IBuilderSetTagBuilderIn<K>): void {
    const { tagBuilderClass } = param;
    this.tagBuilderInstance = new Builder<K>({ builder: tagBuilderClass });
  }

  public static setFrameBuilder<K>(param: IBuilderSetFrameBuilderIn<K>): void {
    const { frameBuilderClass } = param;
    this.frameBuilderInstance = new Builder<K>({ builder: frameBuilderClass });
  }

  public static getTagBuilder<K>(): IBuilderGetTagBuilderOut<K> {
    return { tagBuilderInstance: this.tagBuilderInstance };
  }

  public static getFrameBuilder<K>(): IBuilderGetFrameBuilderOut<K> {
    return { frameBuilderInstance: this.frameBuilderInstance };
  }

  public buildElement<P, S>(elementOption: ElementOption<T, P, S>): IElement<T> {
    const { element } = this.builder.buildElement(elementOption);
    return { element };
  }
}
