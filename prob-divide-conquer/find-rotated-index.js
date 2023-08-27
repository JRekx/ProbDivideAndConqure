function findRotatedIndex(arr, num) {
    // Find the pivot where the array is rotated.
    var pivot = findPivot(arr);
    
    // Determine which half of the array to search based on the pivot.
    if (pivot > 0 && num >= arr[0] && num <= arr[pivot - 1]) {
        // Search in the left half.
        return binarySearch(arr, num, 0, pivot - 1);
    } else {
        // Search in the right half.
        return binarySearch(arr, num, pivot, arr.length - 1);
    }
}

// Binary search function to find the index of a number in a sorted array.
function binarySearch(arr, num, start, end) {
    // If the array is empty or the number is out of the array's range, return -1.
    if (arr.length === 0 || num < arr[start] || num > arr[end])
        return -1;
    
    // Perform binary search.
    while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        if (arr[mid] === num) {
            return mid; // Number found at index mid.
        } else if (num < arr[mid]) {
            end = mid - 1; // Adjust the search range to the left half.
        } else {
            start = mid + 1; // Adjust the search range to the right half.
        }
    }
    return -1; // Number not found.
}

// Function to find the pivot index where the array is rotated.
function findPivot(arr) {
    // If the array is already sorted, return 0 as there's no rotation.
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) 
        return 0;

    var start = 0;
    var end = arr.length - 1;
    
    while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        // Compare the middle element with the start element to determine rotation.
        if (arr[mid] > arr[start] && arr[mid] >= arr[arr.length - 1]) {
            start = mid + 1; // Adjust the search range to the right.
        } else {
            end = mid - 1; // Adjust the search range to the left.
        }
    }
    return start; // Return the pivot index.
}


module.exports = findRotatedIndex;
