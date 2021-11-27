function breakingRecords(scores) {


    let max = scores[0],
        min = scores[0],
        maxCount = 0,
        minCount = 0;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i];
            maxCount++;
        }
        if (scores[i] < min) {
            min = scores[i];
            minCount++;
        }
    }

    return [maxCount, minCount];

}


console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));