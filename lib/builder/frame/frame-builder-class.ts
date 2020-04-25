import { IElement, IFrameElementOption } from '../../ui-wrapper-expose';
import {
  IBuilderGetFrameBuilderOut,
  IBuilderSetFrameBuilderIn,
  IFrameBuilder,
  IFrameBuilderEntry
} from './frame-builder-interface';

export class FrameBuilder<T> implements IFrameBuilder<T> {
  // HACK: these property will never get any type as its generic type, because the setter methods are getting a required type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static frameBuilderInstance: FrameBuilder<any>;
  private readonly frameBuilder: IFrameBuilder<T>;

  private constructor(entry: IFrameBuilderEntry<T>) {
    const { FrameBuilderConstructor } = entry;
    this.frameBuilder = new FrameBuilderConstructor();
  }

  public buildElement<P = never, S = never, RequiredP extends P = P, RequiredS extends S = S>(
    param: IFrameElementOption<T, RequiredP, RequiredS>
  ): IElement<T> {
    const { properties, children, UnitConstructor } = param;
    const { element } = this.frameBuilder.buildElement<RequiredP, RequiredS>({
      UnitConstructor,
      children,
      properties
    });

    return { element };
  }

  public static setFrameBuilder<K>(param: IBuilderSetFrameBuilderIn<K>): void {
    const { frameBuilderClass } = param;
    FrameBuilder.frameBuilderInstance = new FrameBuilder<K>({
      FrameBuilderConstructor: frameBuilderClass
    });
  }

  public static getFrameBuilder<K>(): IBuilderGetFrameBuilderOut<K> {
    const { frameBuilderInstance } = FrameBuilder;

    return { frameBuilderInstance };
  }
}
