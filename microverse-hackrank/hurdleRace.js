
function hurdleRace(k, height) {
    // Write your code here
    let max = Math.max(...height);
    if (max <= k) {
        return 0;
    }
    return max - k;
    

}