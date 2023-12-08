/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    const sortedstr1=str1.split('').sort().join(''); //cannot sort string directly in js. so first convert to array,sort,make it to back
    const sortedstr2=str2.split('').sort().join('');
    return sortedstr1==sortedstr2;
  }
  
  module.exports = isAnagram;
  