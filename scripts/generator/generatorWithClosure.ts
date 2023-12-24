export const generatorWithClosure = <T, TReturn, TNext>(
  state: TNext,
  update: (state: TNext) => { value: T; next: TNext },
  predicate: (state: TNext) => boolean,
): Generator<T, TReturn, TNext> => {
  const $state = {
    value: state,
  };

  const $update = () => {
    const { value, next } = update($state.value);
    $state.value = next;
    return { value };
  };

  return ({
    next: (..._args): IteratorResult<T, TReturn> => {
      if (predicate($state.value)) {
        return { value: undefined as TReturn, done: true };
      } else {
        const { value } = $update();
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
