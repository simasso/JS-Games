if (process.argv.length < 3) {
  console.error("Please enter a phrase!");
}

const phrase = process.argv.slice(2);
const vowels = ["a", "e", "i", "o", "u"];

function translate(word) {
  if (vowels.some((vowel) => word.charAt(0) === vowel)) {
    return word + "way";
  } else if (vowels.some((vowel) => word.charAt(1) === vowel)) {
    return word.slice(1) + word.charAt(0) + "ay";
  } else {
    return word.slice(2) + word.slice(0, 2) + "ay";
  }
}
pig_phrase = phrase.map(translate);
console.log(pig_phrase);
