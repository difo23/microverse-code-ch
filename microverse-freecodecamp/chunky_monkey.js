/*
Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {

    var newArr = [];
    var i = 0;
    while (i < arr.length) {
        newArr.push(arr.slice(i, i + size));
        i += size;
    }       
    return newArr;
    
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);