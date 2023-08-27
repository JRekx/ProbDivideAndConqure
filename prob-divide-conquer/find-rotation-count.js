function findRotationCount(arr, low = 0, high = arr.length - 1) {
    // If the higher index becomes less than the lower index, the array is not rotated.
    if (high < low) 
        return 0;
    
    // If the higher and lower indices are the same, there's only one element left.
    // This element is the rotation point.
    if (high === low)
        return low;
    
    // Calculate the middle index.
    let mid = Math.floor((low + high) / 2);

    // If the element after the middle is smaller, the next element is the rotation point.
    if (arr[mid + 1] < arr[mid]) 
        return mid + 1;

    // If the element before the middle is greater, the middle element is the rotation point.
    if (arr[mid] < arr[mid - 1]) {
        return mid;
    }

    // Decide which half of the array to explore for the rotation point.
    return arr[high] > arr[mid]
        ? findRotationCount(arr, low, mid - 1) // Left half
        : findRotationCount(arr, mid + 1, high); // Right half
}

module.exports = findRotationCount;
