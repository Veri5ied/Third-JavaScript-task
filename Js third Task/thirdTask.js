function myNumbers(nums) {
    const result = [];
    for (let theNumber = 1; theNumber < nums; theNumber++) {
        if (theNumber % 2 == 0 && theNumber % 3 == 0 && theNumber % 5 == 0) {
            result.push("yu-gi-oh");
        } else if (theNumber % 2 == 0 && theNumber % 3 == 0) {
            result.push("yu-gi");
        } else if (theNumber % 2 == 0) {
            result.push("yu");
        } else if (theNumber % 3 == 0) {
            result.push("gi");
        } else if (theNumber % 5 == 0) {
            result.push("oh");
        } else {
            result.push(theNumber);
        }
    }
    return result;
}
myNumbers(100);