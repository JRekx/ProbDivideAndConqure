function findFloor(arr, num, low = 0, high = arr.length - 1) {
    // If the search range is invalid, no floor value found.
    if (low > high)
        return -1;

    // If the number is greater than or equal to the largest element,
    // the floor value is the largest element.
    if (num >= arr[high])
        return arr[high];

    // Calculate the middle index for binary search.
    let mid = Math.floor((low + high) / 2);

    // If the middle element is the same as the number, it's the floor value.
    if (arr[mid] === num)
        return arr[mid];

    // Check if the number falls between the elements at mid-1 and mid.
    if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
        // The floor value is the element at mid-1.
        return arr[mid - 1];
    }

    // If the number is greater than the middle element,
    // search in the left half of the remaining array.
    if (num > arr[mid]) {
        return findFloor(arr, num, low, mid - 1);
    }
    
    // Otherwise, search in the right half of the remaining array.
    return findFloor(arr, num, mid + 1, high);
}

module.exports = findFloor;
