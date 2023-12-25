export const generatorWithClosure = <T, TReturn, TNext>(
  state: T,
  update: (state: T) => { value: T; next: TNext },
  predicate: (state: T) => boolean,
): () => Generator<T, TReturn, TNext> =>
() => {
  const $state = {
    value: state,
  };

  return ({
    next: (..._args): IteratorResult<T, TReturn> => {
      if (predicate($state.value)) {
        return { value: undefined as TReturn, done: true };
      } else {
        const { value, next } = update($state.value);
        $state.value = next as unknown as T;
        return { value, done: false };
      }
    },

    return: (value: TReturn): IteratorResult<T, TReturn> => ({
      value,
      done: true,
    }),

    throw: (e: Error): IteratorResult<T, TReturn> => {
      throw e;
    },

    [Symbol.iterator]: function () {
      return this;
    },
  });
};
