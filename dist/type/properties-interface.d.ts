export interface IBasicProperties<T> {
    key?: string | number;
    children?: string | (string | T)[];
}
