//Write a recursive function which accepts an array of arrays and returns a new array with all values flattened.

//Sample Input:
//flatten([1, 2, 3, [4, 5] ]) --> [1, 2, 3, 4, 5]
//flatten([1, [2, [3, 4], [[5]]]]) --> [1, 2, 3, 4, 5]
//flatten([[1],[2],[3]]) --> [1, 2, 3]
//flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) --> [1, 2, 3]


function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
}