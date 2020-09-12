//Write a recursive function which accepts an array of strings.
//Capitalize the first letter of each string in the array.

//Sample Input:
//capitalizeFirst(['car','taco','banana']); --> ['Car','Taco','Banana']


function capitalizeWords (array) {
    if (array.length === 1) {
      let str = array[0];
      return [str[0].toUpperCase() + str.substring(1)];
    }
    let res = capitalizeWords(array.slice(0, -1));
    let str = array.slice(array.length-1)[0];
    res.push(str[0].toUpperCase() + str.substring(1));
    return res; 
}


