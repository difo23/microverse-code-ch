


function bonAppetit(bill, k, b) {
    // Write your code here

    const kVal = bill[k];
    const sum_share = bill.reduce((a, b) => (a + b), 0 ) - kVal;
    const bill_share = sum_share / 2;


    if (bill_share === b) {
        console.log("Bon Appetit")
        
    } else {
        console.log( b - bill_share );
    }

}


bonAppetit([3,10, 2, 9], 1, 12 );