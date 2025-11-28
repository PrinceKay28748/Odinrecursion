function genSort(array) {
    array.sort((a, b) => a - b); // ascending order
    return array;

    array.sort((a, b) => b - a);

}

console.log(genSort([5, 3, 8, 1, 2])); // Output: [8, 5, 3, 2, 1]


const user = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

user.sort((a, b) => a.age - b.age);
console.log(user);

// now lets do merge sort

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        const mid = Math.floor(arr.length / 2);
        const leftArray = arr.slice(0, mid);
        const rightArray = arr.slice(mid, arr.length);
        return merge(mergeSort(leftArray), mergeSort(rightArray));

    }


}
function merge(left, right) {
    const sortedArray = [];

    let i = 0, j = 0;
// Merging the two arrays
// Comparing elements from left and right arrays
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }


    }

    // Add remaining elements from left array, if any
    while (i < left.length) {
        sortedArray.push(left[i]);
        i++;
    }
    // Add remaining elements from right array, if any
    while (j < right.length) {
        sortedArray.push(right[j]);
        j++;
    }
    return sortedArray;
}

console.log(mergeSort([5, 3, 8, 1, 2])); // Output: [1, 2, 3, 5, 8]