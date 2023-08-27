function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;
    let count = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === 0) {
            count = right - mid + 1; // Count zeroes in the right half
            right = mid - 1; // Search in the left half
        } else {
            left = mid + 1; // Search in the right half
        }
    }

    return count;
}

module.exports = countZeroes