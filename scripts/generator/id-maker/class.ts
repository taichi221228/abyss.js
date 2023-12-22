class IdMaker {
  i = 0;

  next() {
    return { value: this.i++ };
  }
}
const gen = new IdMaker();

/**
 * @return {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
 */
[...Array(10)].forEach(() => console.log(gen.next().value));
