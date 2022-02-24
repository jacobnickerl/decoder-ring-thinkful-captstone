// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    let alphabet = {
      "a": "11", "b": "21", "c": "31", "d": "41", "e": "51",
      "f": "12", "g": "22", "h": "32", "i": "42", "j": "42", "k": "52",
      "l": "13", "m": "23", "n": "33", "o": "43", "p": "53",
      "q": "14", "r": "24", "s": "34", "t": "44", "u": "54",
      "v": "15", "w": "25", "x": "35", "y": "45", "z": "55"
      };
  let newInfo = input.toLowerCase();
  let result = "";

  if (!input) {
      return false;
  }

  if (encode) {
      for (let i = 0; i < newInfo.length; i++) {
          let characters = newInfo[i];
          if (characters === "i" || characters === "j") {
              result += alphabet["i"];
          } else if (characters === " ") {
              result += " ";
          } else {
              let matches = Object.entries(alphabet).find((letter) => characters === letter[0]);
              result += matches[1];
          }
      }

  } else {
      let counter = 0;
      for (let i = 0; i < input.length; i++) {
          if (input[i] !== " ") {
              counter++
          }
      }

      if (counter % 2 !== 0) {
          return false;
      }

      for (let i = 0; i < input.length; i += 2) {
          let code = `${input[i]}${input[i + 1]}`;
          if (code.includes(" ")) {
              result += " ";
              i-=1;
          } else if (code === "42") {
              result += "(i/j)";
          } else {
              let matches = Object.entries(alphabet).find((letter) => code === letter[1]);
              if (matches) {
                  result += matches[0];
              }
          }
      }
  }
  return result; 
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
