/**
 * O(n) is proportional to the size of the input.
 *
 * @param {number[]} arr - The array of numbers to log.
 * @returns {void}
 */

const logAll = (arr: number[]): void => {
    arr.forEach((_, i) => console.log(arr[i]));
}

logAll([...Array(10)].map((_, i) => i));
logAll([...Array(100000)].map((_, i) => i));
