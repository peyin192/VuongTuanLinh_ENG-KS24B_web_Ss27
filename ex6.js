function isArithmeticSequence(arr) {
    if (!Array.isArray(arr) || arr.length < 2 || !arr.every(num => typeof num === 'number')) {
        return "du lieu khong hop le";
    }

    let diff = arr[1] - arr[0];

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== diff) {
            return false;
        }
    }

    return true;
}

console.log(splitArray([2, 4, 6, 8], 3));
console.log(splitArray([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(splitArray([1, 2, 3, 5, 7, 8], 2));
console.log(splitArray("abc", 3));
