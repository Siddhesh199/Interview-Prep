//Implement Quick Sort

//Sample Input:
//quickSort([22, 4, 1, 3, 9, 8, 21]) --> [1, 3, 4, 8, 9, 21, 22]


//Time complexity - O(n^2)
//Space complexity - O(log n)
function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right);
        
        //left
        quickSort(arr, left, pivotIndex - 1);

        //right
        quickSort(arr, pivotIndex + 1, right);

        return arr;
    }
}


function pivot(arr, start = 0, end = arr.length - 1){

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    //We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIndex = start;

    for(let i = start + 1; i <= end; i++){
        if(pivot > arr[i]){
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }

    swap(arr, start, swapIndex);

    return swapIndex;
}


