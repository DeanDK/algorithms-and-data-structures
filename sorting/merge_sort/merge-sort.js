/*
* Description - merge to sorted arrays.
* The idea is to start from index 0 on both arrays and compare the values, respectively. Smaller value
* is added to a new array and the index of the array that held smaller value is incremented. Once the end
* of either array is reached, elements that are left, if any, should be added to a new array.
* BigO(n+m)
* @param {Array<Number>} arr1 - Array that should be sorted
* @param {Array<Number>} arr2 - Array that should be sorted
* */

const merge = (arr1, arr2) => {
    let results = [];

    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    };

    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
};

/*
* Description - split the arrays and call merge
* BigO(n log n)
* @param {Array<Number>} arr - Unsorted array
* */


function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
};

export default mergeSort;

console.log(mergeSort([5,1,15,19,2,102,94,54,67]));