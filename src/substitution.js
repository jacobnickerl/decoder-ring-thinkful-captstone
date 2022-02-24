// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    let standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    let otherResult = [];
    let newInfo = input.toLowerCase();

    if (!input || !alphabet) {
      return false;
    }
    if (alphabet.length !== 26) {
      return false;
    }
    for (let characters in alphabet) {
      if (otherResult.indexOf(alphabet[characters]) < 0) {
        otherResult.push(alphabet[characters]);
      } else {
        return false;
      }
    }

    for (let i=0; i < newInfo.length; i++) {
      if (newInfo[i] === " ") {
        result += " ";
      } else {
        let normAbc = standardAlphabet;
        let abc = alphabet;
        if (!encode) {
          normAbc = alphabet;
          abc = standardAlphabet;
        };

        for (let j = 0; j < normAbc.length; j++) {
          if (newInfo[i] === normAbc[j]) {
            result += abc[j]
          }
        }
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
