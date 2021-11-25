/*

Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/




const destroyer = (arr) => {


    var args = Array.from(arguments);
    args.shift();
    return arr.filter(function (val) {
        return args.indexOf(val) === -1;
    });

}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

