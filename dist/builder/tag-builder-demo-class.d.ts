import { TDemoElement } from '../type/element-type';
import { IElement } from '../unit/unit-interface';
import { ITagBuilder, ITagElementOption } from './builder-interface';
export declare class TagBuilderDemo implements ITagBuilder<TDemoElement> {
    buildElement<P, S>(param: ITagElementOption<TDemoElement, P, S>): IElement<TDemoElement>;
}
