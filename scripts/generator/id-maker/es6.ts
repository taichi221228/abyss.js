function* idMaker() {
  for (let i = 0;; i++) {
    yield i;
  }
}

const gen = idMaker();

/**
 * @return {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
 */
[...Array(10)].forEach(() => console.log(gen.next().value));
