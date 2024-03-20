// !JS- tipCalculator


function tipCalculator(billAmount, tipPercentage) {
  // tipPercentage
  const tipAmount = billAmount * (tipPercentage / 100);
  // bill with tipPercentage
  const totalAmount = billAmount + tipAmount;

  return totalAmount;
}
// bill & tips amount ....
const billAmount = 20;

const tipPercentage = 10;
// total bill amount ....
const total = tipCalculator(billAmount, tipPercentage);

console.log("Total bill with tips : $", total);
// 

// !js- woodCalculator

function woodCalculator(numTables, numChairs, numShelves) {
  // table wood numbers
  const tableWood = numTables * 8;
  console.log("table wood numbers:", tableWood);

  // chair Wood numbers
  const chairWood = numChairs * 3;
  console.log("chair wood numbers:", chairWood);


  // shelf Wood numbers
  const shelfWood = numShelves * 5;
  console.log("self wood numbers:", shelfWood);

  // total wood numbers
  const totalWood = tableWood + chairWood + shelfWood;
  return totalWood;


}
// table number
const numTables = 2;
// chair number
const numChairs = 3;
// shelf number
const numShelves = 4;


const totalWood = woodCalculator(numTables, numChairs, numShelves);
console.log("total wood:", totalWood);
//

// !js brickCalculator
function brickCalculator(numFloors) {
  // floor 1-10
  if (numFloors <= 10) {
    return 12000 * numFloors;
    //   floor 11-15
  } else if (numFloors => 10 && numFloors <= 15) {
    return 12000 * 10 + (10000 * (numFloors - 10));
    // floor 16 -above
  } else {
    return (9000 * (numFloors - 15)) + (10000 * 5) + (12000 * 10);
  }
}

//   total number of bricks for number of  floor
const numFloors = 14;
const totalBricks = brickCalculator(numFloors);
console.log("total number of bricks:", totalBricks);

// 