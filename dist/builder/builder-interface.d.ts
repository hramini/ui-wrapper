export interface IElementOption<T, P> {
    properties: P;
    children?: (string | T)[];
}
