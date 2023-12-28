// O(n) is proportional to the size of the input.

const logAll = (arr: number[]): void => {
    arr.forEach((_, i) => console.log(arr[i]));
}

logAll([...Array(100000)].map((_, i) => i));
logAll([...Array(10)].map((_, i) => i));
