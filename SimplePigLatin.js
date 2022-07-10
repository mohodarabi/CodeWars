/*
    Instruction:
    Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

    Test:
    pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
    pigIt('Hello world !');     // elloHay orldway !

*/

function isLetter(char) {
  return char.match(/[a-z]/i);
}

function pigIt(str) {
  const arr = str.split(" ");
  return arr
    .map((word) =>
      isLetter(word) !== null
        ? (word = word.substring(1) + `${word[0]}ay`)
        : word
    )
    .join(" ");
}
