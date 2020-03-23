export interface IPrimer<T> {
  // getTagBuilder(): IPrimerGetTagBuilderOut<T>;
  // getFrameBuilder(): IPrimerGetFrameBuilderOut<T>;
  start(param: PrimerStartOptions<T>): void;
}

export interface PrimerStartOptions<T> {
  element: T;
  target: HTMLElement;
}

export interface IPrimerEntry<T> {
  primer: new () => IPrimer<T>;
}

export interface PrimerElement<T> {
  element: T;
}

export interface PrimerTarget {
  target: HTMLElement;
}

// export interface IPrimerGetTagBuilderOut<T> {
//   tagBuilder: new () => ITagBuilder<T>;
// }

// export interface IPrimerGetFrameBuilderOut<T> {
//   frameBuilder: new () => IFrameBuilder<T>;
// }
