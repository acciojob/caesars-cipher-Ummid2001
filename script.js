[8:12 PM, 10/5/2023] Vikash Ranchi: const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(str) {
    return str.replace(/[A-Z]/g, (match) => {
        const charCode = match.charCodeAt(0);
        const offset = charCode < 78 ? 13 : -13;
        return String.fromCharCode(charCode + offset);
    });
}
// Your Result goes here
  // Only change code below this line

   //return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
[8:12 PM, 10/5/2023] Vikash Ranchi: Caesar's Cipher
[8:18 PM, 10/5/2023] Vikash Ranchi: function firstNonRepeatedChar(str) {
    // Create an object to store character frequencies
    const charCount = {};

    // Iterate through the string to count character frequencies
    for (const char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Iterate through the string again to find the first non-repeated character
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null
    return null;
}
