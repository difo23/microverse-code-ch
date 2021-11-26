function printLine(space, step, char) {
    let line = "";
    for (let i = 0; i < space; i++) {
        line += " ";
    }

    for (let i = 0; i < step; i++) {
        line += char;
    }

    console.log(line);
}


function staircase(n) {
    // Write your code here

    let space = n - 1;
    let step = 1;
    const char = "#";


    while (space >= 0) {
        printLine(space, step, char);
        space--;
        step++;
    }

}

staircase(6)