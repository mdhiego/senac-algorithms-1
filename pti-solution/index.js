do {
    console.log("Hi! Welcome!");
    console.log("This little calculator indicates the fuel which is" +
        "most worth it today in terms of consume!\n");

    console.log("Let's go check!\n");

    let gasolineCost = prompt("How much is gasoline costing?");
    let alcoholCost = prompt("How much is alcohol costing?\n");

    const equilibriumRatio = 0.7;
    let costRatio = alcoholCost / gasolineCost;

    if (costRatio < equilibriumRatio) {
        console.log("Gasoline is the option which most worth it!\n");
    } else if (costRatio > equilibriumRatio) {
        console.log("Alcohol is the option which most worth it!\n");
    } else {
        console.log("Doesn't matter, both options worth the same!\n");
    }

    let toContinue;
    do {
        toContinue = prompt("Do you want to make another check (y/n)?");
    } while (toContinue != 'y' && toContinue != 'n');

} while (toContinue == 'y');