// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    if (shift > 25 || shift === 0 || shift < -25 || !shift) return false;
    if (!encode) {
      shift *= -1;
    }
    
    let newArray = [];
    const characters = input.toLowerCase().split("");

    for (let index in characters) {
      if (
        characters[index].toLowerCase().charCodeAt(0) <= 96 ||
        characters[index].toLowerCase().charCodeAt(0) >= 123
      ) {
        newArray.push(characters[index]);
      } else {
        let lowerAndCoded = characters[index].toLowerCase().charCodeAt(0);
        const shiftFunction = () => {
          let shiftedCode = lowerAndCoded + shift;
          if (shiftedCode < 97) {
            return (shiftedCode += 26);
          } else if (shiftedCode > 122) {
            return (shiftedCode -= 26);
          } else {
            return shiftedCode;
          }
        };
        let shiftedChar = String.fromCharCode(shiftFunction());
        newArray.push(shiftedChar);
      }
    }
    return newArray.join("");
  }
  




  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
