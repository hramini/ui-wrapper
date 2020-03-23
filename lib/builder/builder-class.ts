import { ElementOption } from '../type/element-option-interface';
import { IElement } from '../unit/unit-interface';
import {
  IBuilder,
  IBuilderEntry,
  IBuilderGetFrameBuilderIn,
  IBuilderGetTagBuilderIn
} from './builder-interface';

export class Builder<T> {
  private builder: IBuilder<T>;
  private static tagBuilderInstance: Builder<any>;
  private static frameBuilderInstance: Builder<any>;

  private constructor(entry: IBuilderEntry<T>) {
    const { builder } = entry;
    this.builder = new builder();
  }

  // public static setBuilders<K>(param: IBuilderSetBuildersIn<K>): void {
  //   const { tagBuilder, frameBuilder } = param;
  //   this.tagBuilderInstance = new Builder<K>({ builder: tagBuilder });
  //   this.frameBuilderInstance = new Builder<K>({ builder: frameBuilder });
  // }

  public static getTagBuilder<K>(param: IBuilderGetTagBuilderIn<K>): Builder<K> {
    const { tagBuilderClass } = param;
    if (!this.tagBuilderInstance) {
      this.tagBuilderInstance = new Builder({ builder: tagBuilderClass });
    }
    return this.tagBuilderInstance;
  }

  public static getFrameBuilder<K>(param: IBuilderGetFrameBuilderIn<K>): Builder<K> {
    const { frameBuilderClass } = param;
    if (!this.frameBuilderInstance) {
      this.frameBuilderInstance = new Builder({ builder: frameBuilderClass });
    }
    return this.frameBuilderInstance;
  }

  public buildElement<P, S>(elementOption: ElementOption<T, P, S>): IElement<T> {
    const { element } = this.builder.buildElement(elementOption);
    return { element };
  }
}
