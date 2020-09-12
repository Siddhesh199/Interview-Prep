//Write a recursive function which accepts an array of strings.
//Capitalize the first letter of each string in the array.

//Sample Input:
//capitalizeFirst(['car','taco','banana']); --> ['Car','Taco','Banana']


function capitalizeFirst (array) {
    if (array.length === 1) {
      return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    res.push(string);
    return res;
  }


