alert("Hi, welcome!");
alert("This small calculator indicates which fuel option " +
    "pays off the most in terms of consumption!\n");

alert("Let's go check!\n");

let isThereAnotherCheck;

do {
    let gasolineCost = prompt("How much is gasoline costing?");
    let alcoholCost = prompt("How much is alcohol costing?");

    const equilibriumRatio = 0.7;
    let costRatio = parseFloat(alcoholCost) / parseFloat(gasolineCost);

    if (costRatio > equilibriumRatio) {
        alert("\nGasoline is the option that pays off more!\n");
    } else if (costRatio < equilibriumRatio) {
        alert("\nAlcohol is the option that pays off more!\n");
    } else {
        alert("\nIt doesn't matter, gasoline and alcohol are equivalent options!\n");
    }

    do {
        isThereAnotherCheck = prompt("Do you want to make another check (y/n)?");
    } while (isThereAnotherCheck.toLowerCase() != 'y' && isThereAnotherCheck.toLowerCase() != 'n');

} while (isThereAnotherCheck == 'y');