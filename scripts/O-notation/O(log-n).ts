// O(log n) is proportional to the logarithm of the input size.
// This is the best time complexity for search algorithms.

const binarySearch = (arr: number[], i = 0): number => {
  let low = 0;
  let high = arr.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    console.log("low:", low, "mid:", mid, "high:", high);

    if (arr[mid] === i) {
      return mid;
    } else if (arr[mid] < i) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};

console.log(binarySearch([...Array(100000)].map((_, i) => i), 4732));
