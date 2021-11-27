
// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {


    let catA = Math.abs(x - z);
    let catB = Math.abs(y - z);

    if (catA < catB) {
        return "Cat A";
    } else if (catB < catA) {
        return "Cat B";
    } else {
        return "Mouse C";
    }

}