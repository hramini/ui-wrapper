import { IUnit } from '../unit/unit-interface';

export interface ElementOption<T, P, S> {
  name: string | (new () => IUnit<T, P, S>);
  properties: P;
  children?: string | Array<string | T>;
}

export interface TagElementOption<T, P, S> extends ElementOption<T, P, S> {
  name: string;
}

export interface FrameElementOption<T, P, S> extends ElementOption<T, P, S> {
  name: new () => IUnit<T, P, S>;
}
