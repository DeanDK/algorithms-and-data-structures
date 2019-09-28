
/*
* Description - bubble sort function when the array is completely unsorted.
* BigO(n^2)
* @param {Array<Number>} arr - Array that should be sorted
*
* */
export const bubbleSort = (arr) => {
    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++) {
            if(arr[j]  > arr[j +1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
};


/*
* Description - bubble sort function when the array is almost sorted.
* The idea is to prevent unnecessary looping in case we only need it e.g twice
* BigO(n)
* @param {Array<Number>} arr - Array that should be sorted
*
* */
const bubbleSort2 = (arr) => {
    let noSwaps;
    for(let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            if(arr[j]  > arr[j +1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
};

const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

