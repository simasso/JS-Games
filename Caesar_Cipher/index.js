function correctCharCode(charCode) {
  const codeA = "a".charCodeAt(0);
  const codeZ = "z".charCodeAt(0);
  if (charCode < codeA) {
    const correctionOffset = codeA - charCode;
    return codeZ - correctionOffset;
  }
  if (charCode > codeZ) {
    const correctionOffset = charCode - codeZ;
    return codeA + correctionOffset;
  }
  return charCode;
}

if (process.argv.length < 4 || isNaN(process.argv[3])) {
  console.error("Please enter a phrase and a shift number!");
  process.exit(2);
}

const phrase = process.argv[2];
const shift = Math.round(Number(process.argv[3])) % 26;
let cipheredPhrase = "";

for (let i = 0; i < phrase.length; i++) {
  let char = phrase.charAt(i);
  let charCode = phrase.charCodeAt(i);
  if (char === " ") {
    cipheredPhrase += char;
  } else {
    const newCharCode = charCode + shift;
    const correctedCharCode = correctCharCode(newCharCode);
    const cipheredChar = String.fromCharCode(correctedCharCode);
    cipheredPhrase += cipheredChar;
  }
}

// "hello world" 3 # Output: khoor zruog
console.log(cipheredPhrase);
