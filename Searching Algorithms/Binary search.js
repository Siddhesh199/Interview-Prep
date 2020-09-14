//Write a function which accepts a sorted array and a value and returns the index at which the value exists.
//Otherwise return -1.


//Sample Input:
//binarySearch([10, 15, 20, 25, 30], 15) --> 1
//binarySearch([1, 2, 3, 4, 5], 6) --> -1


function binarySearch(arr, val){
    
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    
    while(arr[middle] !== val && start <= end){
        if(val < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    
    return arr[middle] === val ? middle : -1;
}


