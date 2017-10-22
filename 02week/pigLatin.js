'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



const  pigLatin = (word) => {

  // take input word and trim using .trim() and .tolowercase()
word = word.trim().toLowerCase();

//find all vowels by using .match() then specify first by [0]
const findFirstVowelInWord = word.match(/[aeiouy]/gi)[0];

//find the position of the first vowel using .indexOf()
const indexFirstVowel = word.indexOf(findFirstVowelInWord);




if(findFirstVowelInWord === null){
  return console.log(findFirstVowelInWord);
}
// if the words first vowel is the first letter, return the word + 'yay'
if(indexFirstVowel === 0){
  return word + 'yay';
}

//if the words first vowel is not the first letter, take the first letters of the word up to the first vowel, move them to the back, and add 'ay' to the end of it.
else if (indexFirstVowel > 0){
  return word.slice(indexFirstVowel) + word.slice(0, indexFirstVowel) + 'ay';
}
}

pigLatin(' Cactus');



function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
