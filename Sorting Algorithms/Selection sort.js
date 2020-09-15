//Implement Selection Sort

//Sample Input:
//selectionSort([22, 4, 1, 3, 9, 8, 21]) --> [1, 3, 4, 8, 9, 21, 22]


function selectionSort(arr){

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for(let i = 0; i < arr.length; i++){
        let lowest = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[lowest]) lowest = j;
        }

        if(i !== lowest) swap(arr, i, lowest);
    }

    return arr;
}


