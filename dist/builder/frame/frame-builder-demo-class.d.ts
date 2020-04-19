import { TDemoElement } from '../../type/element-type';
import { IElement } from '../../unit/unit-interface';
import { IFrameBuilder, IFrameElementOption } from './frame-builder-interface';
export declare class FrameBuilderDemo implements IFrameBuilder<TDemoElement> {
    buildElement<P = never, S = never, RequiredP extends P = P, RequiredS extends S = S>(param: IFrameElementOption<TDemoElement, RequiredP, RequiredS>): IElement<TDemoElement>;
}
