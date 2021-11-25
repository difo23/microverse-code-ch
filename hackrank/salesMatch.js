function checkNumber(num) {

    if (num > 0) {
        return 1;
    } else if (num < 0) {
        return -1;
    }

    return 0;

}

const divider = (num, div, fix) => {

    const result = num / div;

 

    return result.toFixed(fix);
}


function plusMinus(arr) {
    // Write your code here

    let ceros = 0;
    let pos = 0;
    let neg = 0;

    for (let i = 0; i < arr.length; i++) {

        switch (checkNumber(arr[i])) {

            case 0:
                ceros += 1;
                break;
            case -1:
                neg += 1;
                break;
            case 1:
                pos += 1;
                break;
            default:
                break;
        }
    }

    pos = divider(pos, arr.length, 6);
    neg = divider(neg, arr.length, 6);
    ceros = divider(ceros, arr.length, 6);


    return [pos, neg, ceros];
}


console.log(plusMinus([-1, 1, 0, 2, 4]))