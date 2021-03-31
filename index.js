// Code your solution in this file!
const a = 42;

function distanceFromHqInBlocks(b) {

    if (a > b) {

        let x = a - b;
        return x;
    }

    let x = b - a;
    return x;

}

function distanceFromHqInFeet(b) {

    let feet = distanceFromHqInBlocks(b) * 264;
    return feet;
}

function distanceTravelledInFeet(b, c) {
    let blocksToDropOff;


    if (b >= c) {

        blocksToDropOff = (b - c);

    } else {

        blocksToDropOff = (c - b);

    }


    let totalFeet = blocksToDropOff * 264;
    return totalFeet;

}


function calculatesFarePrice(b, c) {
    let totalFeet = distanceTravelledInFeet(b, c);

    if (totalFeet <= 400) {
        return 0;
    }
    if (totalFeet > 400 && totalFeet <= 2000) {

        return (totalFeet - 400) * 0.02;

    }
    if (totalFeet > 2000 && totalFeet <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }


}