//Given two strings, write a function to determine if the second strings
//is an anagram of the first. An anagram is a word, phrase or name formed
//by rearranging the letters of another, such as "cinema" formed from "iceman"

//anagram('', '') --> true
//anagram('aaz', 'zza') --> false
//anagram('qwerty', 'qeywrt') --> true
//anagram('rat', 'car') --> false


//Solution 1: O(3n) ==> O(n) time complexity
function anagram(str1, str2){
    
    if(str1.length !== str2.length){
        return false;
    }
    
    let arr1 = str1.split("");
    let arr2 = str2.split("");
    
    let counter1 = {};
    let counter2 = {};
    
    for(let val of arr1){
        counter1[val] = (counter1[val] || 0) + 1;
    }
    
    for(let val of arr2){
        counter2[val] = (counter2[val] || 0) + 1;
    }
    
    for(let key in counter1){
        if(!(key in counter2)){
            return false;
        }
        
        if(counter1[key] !== counter2[key]){
            return false;
        }
    }
    
    return true;
}


//Solution 2: O(2n) ==> O(n) time complexity
function anagram(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < str1.length; i++) {
      let letter = str1[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < str2.length; i++) {
      let letter = str2[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
}


