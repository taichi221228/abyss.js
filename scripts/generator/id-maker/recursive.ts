function* idMaker(i = 0): Generator<number> {
    yield* idMaker(i + 1);
}

const gen = idMaker();

/**
 * @return {Error("Uncaught RangeError: Maximum call stack size exceeded")}
 */
[...Array(10)].forEach(() => console.log(gen.next().value));
