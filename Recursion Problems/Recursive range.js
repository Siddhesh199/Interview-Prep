//Write a function which accepts a number and adds up all the numbers from 0 to the number
//passed to the function.

//Sample Input:
//recursiveRange(6) --> 21
//recursiveRange(10) --> 55 


function recursiveRange(x){
    if (x === 0 ) return 0;
    return x + recursiveRange(x-1);
}


