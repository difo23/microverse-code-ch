

function aVeryBigSum(ar) {

    // In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

    let bigSum = BigInt(0);

    for (let i = 0; i < ar.length; i++) {
        bigSum += BigInt(ar[i]);

    }

    return bigSum;


}


const ar = ["1000000001", "1000000002", "1000000003", "1000000004", "1000000005"]


console.log(aVeryBigSum(ar));