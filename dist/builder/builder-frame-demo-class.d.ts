import { FrameElementOption } from '../type/element-option-interface';
import { TDemoElement } from '../type/element-type';
import { IElement } from '../unit/unit-interface';
import { IFrameBuilder } from './builder-interface';
export declare class FrameBuilderDemo implements IFrameBuilder<TDemoElement> {
    buildElement<P, S>(elementOption: FrameElementOption<TDemoElement, P, S>): IElement<TDemoElement>;
}
