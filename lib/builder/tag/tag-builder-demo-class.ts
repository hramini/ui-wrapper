import { TDemoElement } from '../../type/element-type';
import { IElement } from '../../unit/unit-interface';
import { ITagBuilder, ITagElementOption } from './tag-builder-interface';

export class TagBuilderDemo implements ITagBuilder<TDemoElement> {
  // eslint-disable-next-line class-methods-use-this
  public buildElement<P>(param: ITagElementOption<TDemoElement, P>): IElement<TDemoElement> {
    const { name } = param;

    return { element: name };
  }
}
