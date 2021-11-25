/*
Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase
*/

function translatePigLatin(str) {


    const ruleFirstConsonant = /^[^aeiou]+/;
    const ruleFirstVowel = /^[aeiou]+/;

    let firstVowel = str.search(ruleFirstVowel);

    if (firstVowel === 0) {
        return str + "way";
    }

    let start = 0;
    for (let end = 0; end < str.length; end++) {
        if (ruleFirstConsonant.test(str[end])) {
            continue;
        } else {
            start = end;
            break;
        }
    }

    return str.substring(start, str.length) + str.substring(0, start) + "ay";

}




translatePigLatin("consonant");