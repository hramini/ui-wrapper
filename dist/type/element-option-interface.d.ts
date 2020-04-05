import { IUnit } from '../unit/unit-interface';
export interface IElementOption<T, P, S> {
    name: string | (new () => IUnit<T, P, S>);
    properties: P;
    children?: (string | T)[];
}
export interface ITagElementOption<T, P, S> extends IElementOption<T, P, S> {
    name: string;
}
export interface IFrameElementOption<T, P, S> extends IElementOption<T, P, S> {
    name: new () => IUnit<T, P, S>;
}
