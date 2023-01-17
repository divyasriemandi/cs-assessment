//sum zero:

let array = [28, 43, -12, 30, 4, 0, 12]
let value = false;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = true;
      } 
    }
  }
}

console.log(value)
//space complexity:O(n)
//time complexity:O(n2)



//Unique Characters:

const hasUniqueCharacters = (word) =>{
    let mySet = new Set()
    for (let el of word){
      mySet.add(el)
    }
    return mySet.size === word.length
  }
  console.log(hasUniqueCharacters('Monday'))
  console.log(hasUniqueCharacters('Moonday'))
//space complexity:o(n)
//time cpmplexity:o(n)

  //pangram sentence

 alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");

const isPangram = (string) => {
    string = string.toLowerCase();
    return alphabets.every(x => string.includes(x));
}

console.log(isPangram('The quick brown fox jumps over the lazy dog!'));
console.log(isPangram('I like cats, but not mice'));
//space complexity:o(1)
//time cpmplexity:o(n)


  //longest Word:

function findLongestWord(arrayOfWords) {
    const lengthofStringArray = arrayOfWords.map(item => item.length);
    const maxLengthinArr = Math.max(...lengthofStringArray);
    const result = arrayOfWords.find(item => item.length === maxLengthinArr);
    console.log(result);
    return result.length;
  }
  
  length = findLongestWord(['test','words']);
  console.log(length);
//space complexity:o(n)
//time complexity:o(n)
