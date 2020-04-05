import { ITagElementOption } from '../type/element-option-interface';
import { TDemoElement } from '../type/element-type';
import { IElement } from '../unit/unit-interface';
import { ITagBuilder } from './builder-interface';

export class TagBuilderDemo implements ITagBuilder<TDemoElement> {
  // eslint-disable-next-line class-methods-use-this
  public buildElement<P, S>(param: ITagElementOption<TDemoElement, P, S>): IElement<TDemoElement> {
    const { name } = param;

    return { element: name };
  }
}
