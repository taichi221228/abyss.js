// O(n^2) is proportional to the square of the size of the input.
// This is an algorithm that is not very efficient for large inputs.

const addAndLog = (arr: number[]): void => {
    arr.forEach((_, i) => {
        arr.forEach((_, j) => {
            console.log(arr[i] + arr[j]);
        });
    });
}

addAndLog([...Array(10000)].map((_, i) => i)); // Boom! This will take a long time to run.
addAndLog([...Array(10)].map((_, i) => i));
