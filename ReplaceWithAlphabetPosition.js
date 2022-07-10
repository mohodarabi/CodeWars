/*
    Instruction:
    Welcome.
    In this kata you are required to, given a string, replace every letter with its position in the alphabet.
    If anything in the text isn't a letter, ignore it and don't return it.
    "a" = 1, "b" = 2, etc.

    Test:
    alphabetPosition("The sunset sets at twelve o' clock.")

 */

function alphabetPosition(text) {
  var result = "";

  for (i = 0; i < text.length; i++) {
    var code = text.toUpperCase().charCodeAt(i);
    if (code > 64 && code < 91) result += code - 64 + " ";
  }

  return result.slice(0, result.length - 1);
}
