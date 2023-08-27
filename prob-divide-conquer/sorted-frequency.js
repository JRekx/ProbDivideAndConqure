// Calculate the frequency of a number in a sorted array.
function sortedFrequency(arr, num) {
    // Find the first index where the number appears.
    let firstIdx = findFirst(arr, num);
    
    // If the number isn't found, return -1.
    if (firstIdx == -1) 
        return firstIdx;
    
    // Find the last index where the number appears.
    let lastIdx = findLast(arr, num);
    
    // Return the frequency by finding the difference between last and first index, plus 1.
    return lastIdx - firstIdx + 1;
}

// Find the first index of a number in a sorted array.
function findFirst(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let mid = Math.floor((low + high) / 2);
        
        // Check if the middle element is the first occurrence.
        if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num)
            return mid;
        else if (num > arr[mid])
            return findFirst(arr, num, mid + 1, high);
        else
            return findFirst(arr, num, low, mid - 1);
    }
    return -1;
}

// Find the last index of a number in a sorted array.
function findLast(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let mid = Math.floor((low + high) / 2);
        
        // Check if the middle element is the last occurrence.
        if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num)
            return mid;
        else if (num < arr[mid])
            return findLast(arr, num, low, mid - 1);
        else
            return findLast(arr, num, mid + 1, high);
    }
    return -1;
}

// Export the sortedFrequency function.
module.exports = sortedFrequency;
