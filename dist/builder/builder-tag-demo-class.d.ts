import { TagElementOption } from '../type/element-option-interface';
import { TDemoElement } from '../type/element-type';
import { IElement } from '../unit/unit-interface';
import { ITagBuilder } from './builder-interface';
export declare class TagBuilderDemo implements ITagBuilder<TDemoElement> {
    buildElement<P, S>(elementOption: TagElementOption<TDemoElement, P, S>): IElement<TDemoElement>;
}
