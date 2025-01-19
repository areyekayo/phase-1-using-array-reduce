const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

/* create a new variable called totalBatteries, which holds the sum
of all of the battery amounts in batteryBatches array */

const totalBatteries = batteryBatches.reduce(function (accum, element){
    return accum + element;
}, 0);