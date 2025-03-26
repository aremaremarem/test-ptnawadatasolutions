const readline = require("readline");

const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Vowel character
function procVowel(param) {
    const vowels = "aeiou";
    return param
        .toLowerCase()
        .replace(/\s/g, '')
        .split('')
        .filter(char => vowels.includes(char))
        .sort((a, b) => param.indexOf(a) - param.indexOf(b))
        .join('');
}

// Consonant character
function procConsonant(param) {
    const vowels = "aeiou";
    return param
        .toLowerCase()
        .replace(/\s/g, '')
        .split('')
        .filter(char => !vowels.includes(char))
        .sort((a, b) => param.indexOf(a) - param.indexOf(b))
        .join('');
}

userInput.question("Input one line of words (S) : ", (input) => {
    const charVowel = procVowel(input);
    const charConsonant = procConsonant(input);

    console.log("Vowel Characters:");
    console.log(charVowel);
    console.log("Consonant Characters:");
    console.log(charConsonant);

    userInput.close();
});
