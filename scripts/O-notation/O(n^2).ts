/**
 * O(n^2) is proportional to the square of the size of the input.
 * This is an algorithm that is not very efficient for large inputs.
 *
 * @param {number[]} arr - The array of numbers to log.
 * @returns {void}
 */

const addAndLog = (arr: number[]): void => {
    arr.forEach((_, i) => {
        arr.forEach((_, j) => {
            console.log(arr[i] + arr[j]);
        });
    });
}

addAndLog([...Array(100)].map((_, i) => i));
addAndLog([...Array(10)].map((_, i) => i));
