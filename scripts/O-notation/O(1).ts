const log = (arr: number[], i: keyof typeof arr) => {
    console.log(arr[i]);
}

log([...Array(10)].map((_, i) => i), 5);
log([...Array(100000)].map((_, i) => i), 5);
