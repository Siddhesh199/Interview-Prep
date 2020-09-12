//Write a function which takes in an array of numbers and returns the product of them all.

//Sample Input:
//productOfArray([1,2,3]) --> 6
//productOfArray([1,2,3,10]) --> 60


function productOfArray(arr) {
    if(arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

