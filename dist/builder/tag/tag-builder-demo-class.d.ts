import { TDemoElement } from '../../type/element-type';
import { IElement } from '../../unit/unit-interface';
import { ITagBuilder, ITagElementOption } from './tag-builder-interface';
export declare class TagBuilderDemo implements ITagBuilder<TDemoElement> {
    buildElement<P = never, RequiredP extends P = P>(param: ITagElementOption<TDemoElement, RequiredP>): IElement<TDemoElement>;
}
