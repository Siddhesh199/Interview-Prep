//Implement Bubble Sort

//Sample Input:
//bubbleSort([22, 4, 1, 3, 9, 8, 21]) --> [1, 3, 4, 8, 9, 21, 22]


//Time complexity - O(n^2)
//Space complexity - O(1)
function bubbleSort(arr){
    
    const swap = (arr, idx1, idx2) => {
         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    let noSwaps;

    for(let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if(arr[j] > arr[j + 1]){
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }

        if(noSwaps) break;  
    }

    return arr;
}


