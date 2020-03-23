export interface States {
}
export declare type PickState<S, K extends keyof S> = {
    [P in K]: S[P];
};
