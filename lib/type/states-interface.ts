export interface IBasicStates {
  key?: string;
}

// eslint-disable-next-line @typescript-eslint/no-type-alias
export type PickState<S, K extends keyof S> = {
  [P in K]: S[P];
};
