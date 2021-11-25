

function sort(str) {
    return str.split("").sort().join("");
}

function isAnagram(query, word) {

    if (query.length !== word.length) return false;
    if (query.length < 1 || query.length > 15) return false;
    if (word.length < 1 || word.length > 15) return false;


    const sort_word = sort(word);

    if (sort_word === query) return true;

    return false;

}



function anagramCheker(queries, dictionaries) {


    const matchs = queries.map(q => {

        const q_sort = sort(q);
        const anagrams = dictionaries
            .filter(w => isAnagram(q_sort, w))
            .length


        return anagrams;

    })

    return matchs;

}




const queries = ["a", "abc", "ttc", "jcp"];

const dictionaries = ["a", "cba", "tct", "a", "cjp", "bca"];


console.log(anagramCheker(queries, dictionaries));

