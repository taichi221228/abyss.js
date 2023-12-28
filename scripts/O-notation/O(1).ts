// O(1) is the best time complexity.

const log = (arr: number[], i: keyof typeof arr): void => {
  console.log(arr[i]);
};

log([...Array(100000)].map((_, i) => i), 5);
log([...Array(10)].map((_, i) => i), 5);
