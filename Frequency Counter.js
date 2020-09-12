//Write a function that accepts to arrays.
//The function should return true if every value in the array
//has it's corresponding value squared in the second array.
//The frequency of the values must  be same

//same([1, 2, 3], [4, 1, 9]) --> true
//same([1, 2, 3], [1, 9]) --> false
//same([1, 2, 1], [4, 4, 1]) --> false(must be same frequency)


//Naive approach --> O(n^2) time complexity
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2) // indexOf() loops behind the scenes
        if(correctIndex === -1){
            return false;
        }

        arr2.splice(correctIndex, 1);
    }

    return true;
}

same([1, 2, 3], [1, 4, 9]);



//Better Approach --> O(3n) ==> O(n) time complexity
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false;
        }

        if(frequencyCounter1[key ** 2] !== frequencyCounter2[key]){
            return false;
        }
    }
    return true;
}

same([1, 2, 3, 5], [1, 4, 9, 25]);


