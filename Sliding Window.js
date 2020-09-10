//Write a function which accepts an array of integers and a number called n.
//The function should calculate the maximum sum of n consecutive elements in
//the array


//maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2) --> 10
//maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4) --> 17
//maxSubArraySum([4, 2, 1, 6], 1) --> 6
//maxSubArraySum([4, 2, 1, 6, 2], 4) --> 13
//maxSubArraySum([], 4) --> null


//Naive approach --> O(n^2) time complexity
function maxSubArraySum(arr, num){
    if(num > arr.length){
        return null;
    }

    let max = -Infinity;
    for(let i = 0; i < arr.length - num + 1; i++){
        let temp = 0;
        for(let j = 0; j < num; j++){
            temp += arr[i + j];
        }
            if(temp > max){
                max = temp;
            }
        }

    return max;
}



//Sliding Window Approach --> O(n) time complexity
function maxSubArraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;

    for(let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}
