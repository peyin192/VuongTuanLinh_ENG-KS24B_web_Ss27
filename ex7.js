function isArithmeticSequence(arr) {
    if (!Array.isArray(arr) || arr.length < 2 || !arr.every(num => Number.isInteger(num))) {
        console.log("Du lieu khong hop le");
        return "Du lieu khong hop le";
    }

    let diff = arr[1] - arr[0];

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== diff) {
            console.log("FALSE");
            return false;
        }
    }

    console.log("TRUE");
    return true;
}

isArithmeticSequence([2, 4, 6, 8]);
isArithmeticSequence([3, 6, 9, 12, 14]);
isArithmeticSequence("1h8t");
