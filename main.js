// !JS- tipCalculator


function tipCalculator(billAmount, tipS) {
    // tipPercentage
    const tipAmount = billAmount * (tipS / 100);
    // bill with tipPercentage
    const totalAmount = billAmount + tipAmount;

    return totalAmount;
  }
// bill & tips amount ....
  const billAmount = 20;
   
  const tipS = 10;
// total bill amount ....
const total = tipCalculator(billAmount, tipS);
    
console.log("Total bill with tips : $",total);
// 

// !js- woodCalculator

function woodCalculator(numTables, numChairs, numShelves) {
    // table wood numbers
    const tableWood = numTables * 8;
    // chair Wood numbers
    const chairWood = numChairs * 3;
    // shelf Wood numbers
    const shelfWood = numShelves * 5;
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

    
    // number of woods for(table,chair,self) ..results
  const tableWood = numTables*8;
  console.log("wood number for Table:",tableWood);

  const chairWood = numChairs*3;
  console.log("wood number for Chair:",chairWood);
  
  const shelfWood = numShelves*5;
  console.log("wood number for Chair:",shelfWood);
//  number of woods for all ...results
  const totalWood = tableWood + chairWood + shelfWood;
  console.log("total wood number:",totalWood);
//

// !js brickCalculator
function brickCalculator(numFloors) {
    // floor 1-10
    if (numFloors <= 10) {
      return 12000 * numFloors;
    //   floor 11-15
    } else if (numFloors <= 15) {
      return 10000 *numFloors + 12000;
      // floor 16 -above
    } else {
      return 9000 *numFloors + 10000;
    }
  }

//   total number of bricks for number of  floor
  const numFloors = 15;
const totalBricks = brickCalculator(numFloors);
console.log("total number of bricks:",totalBricks); 

// 