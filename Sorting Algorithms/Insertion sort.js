//Implement Insertion Sort

//Sample Input:
//insertionSort([22, 4, 1, 3, 9, 8, 21]) --> [1, 3, 4, 8, 9, 21, 22]


//Time complexity - O(n^2)
//Space complexity - O(1)
function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j];
        }

        arr[j+1] = currentVal;
    }

    return arr;
}


