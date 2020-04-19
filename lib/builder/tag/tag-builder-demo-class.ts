import { TDemoElement } from '../../type/element-type';
import { IElement } from '../../unit/unit-interface';
import { ITagBuilder, ITagElementOption } from './tag-builder-interface';

export class TagBuilderDemo implements ITagBuilder<TDemoElement> {
  // eslint-disable-next-line class-methods-use-this
  public buildElement<P = never, RequiredP extends P = P>(
    param: ITagElementOption<TDemoElement, RequiredP>
  ): IElement<TDemoElement> {
    const { name } = param;

    return { element: name };
  }
}
