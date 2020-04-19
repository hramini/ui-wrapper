import { TDemoElement } from '../../type/element-type';
import { IElement } from '../../unit/unit-interface';
import { IFrameBuilder, IFrameElementOption } from './frame-builder-interface';
export declare class FrameBuilderDemo implements IFrameBuilder<TDemoElement> {
    buildElement<P, S>(param: IFrameElementOption<TDemoElement, P, S>): IElement<TDemoElement>;
}
