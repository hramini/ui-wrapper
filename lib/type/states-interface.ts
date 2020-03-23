export interface States {}

export type PickState<S, K extends keyof S> = {
  [P in K]: S[P];
};
