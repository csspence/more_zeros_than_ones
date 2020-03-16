/*
Create a moreZeros function which will receive a string for input, and return an array containing only the characters 
from that string whose binary representation of its ASCII value consists of more zeros than ones.

You should remove any duplicate characters, keeping the first occurence of any such duplicates, so they are in the same order 
in the final array as they first appeared in the input string.

Examples

'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False

        --> ['a','b','d']

'DIGEST'--> ['D','I','E','T']
All input will be valid strings of length > 0.
*/

const moreZeros = (s) => {
  const asciiObj = {};
  const helperArr = [];
  const returnArr = [];
  
  //Fills helperArr without duplicates
  for(let i = 0; i < s.length; i++) {
    if(asciiObj[s[i]] === undefined) {
      asciiObj[s[i]] = true;
      helperArr.push(s[i]);
    }
  }

  const sumOnesAndZeros = (char) => {
    let ones = 0;
    let zeros = 0;
    let string = char.charCodeAt().toString(2);
    for(let j = 0; j < string.length; j++) {
      if(string[j] === '1') {
        ones++;
      } else {
        zeros++;
      }
    }

    return (zeros > ones ? true : false);
  }

  //Fills returnArr
  for(let h = 0; h < helperArr.length; h++) {
    if(sumOnesAndZeros(helperArr[h]) === true) {
      returnArr.push(helperArr[h]);
    }
  }

  return returnArr;
}