export interface IBasicStates {
    key?: string;
}
export declare type PickState<S, K extends keyof S> = {
    [P in K]: S[P];
};
