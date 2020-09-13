//Write a recursive function which accepts an array of words and returns a new array
//containing each word capitalized. 

//Sample Input:
//let words = ['i', 'am', 'learning', 'recursion'];
//capitalizedWords(words); --> ['I', 'AM', 'LEARNING', 'RECURSION']


function capitalizeWords (array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
   
}


