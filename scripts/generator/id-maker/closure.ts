import { generatorWithClosure } from "../generatorWithClosure.ts";

const gen = generatorWithClosure(
  0,
  (i) => ({ value: i, next: i + 1 }),
  (i) => i > 10,
);

/**
 * @return {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
 */
[...Array(10)].forEach(() => console.log(gen.next().value));
