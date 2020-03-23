import { TDemoElement } from '../type/element-type';
import { IPrimer, PrimerStartOptions } from './primer-interface';

export class PrimerDemo implements IPrimer<TDemoElement> {
  // public getTagBuilder(): IPrimerGetTagBuilderOut<TDemoElement> {
  //   return { tagBuilder: TagBuilderDemo };
  // }
  // public getFrameBuilder(): IPrimerGetFrameBuilderOut<TDemoElement> {
  //   return { frameBuilder: FrameBuilderDemo };
  // }
  start(param: PrimerStartOptions<TDemoElement>): void {
    const { element, target } = param;
    target.innerHTML = element;
  }
}
