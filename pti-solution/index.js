console.log("Hi, welcome!");
console.log("This little calculator indicates the fuel which is " +
    "most worth it today in terms of consume!\n");

console.log("Let's go check!\n");

let isThereAnotherCheck;

do {
    let gasolineCost = prompt("How much is gasoline costing?");
    let alcoholCost = prompt("How much is alcohol costing?");

    const equilibriumRatio = 0.7;
    let costRatio = alcoholCost / gasolineCost;

    if (costRatio > equilibriumRatio) {
        console.log("\nGasoline is the option which most worth it!\n");
    } else if (costRatio < equilibriumRatio) {
        console.log("\nAlcohol is the option which most worth it!\n");
    } else {
        console.log("\nDoesn't matter, both options worth the same!\n");
    }

    do {
        isThereAnotherCheck = prompt("Do you want to make another check (y/n)?");
    } while (isThereAnotherCheck.toLowerCase() != 'y' && isThereAnotherCheck.toLowerCase() != 'n');

} while (isThereAnotherCheck == 'y');