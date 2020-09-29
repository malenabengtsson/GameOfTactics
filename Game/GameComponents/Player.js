const UnitList = require('./UnitList')
module.exports = class Player {
  unitList = new UnitList;
  gold;

  buyUnit(unit){
    UnitList.push();
    this.shouldUnitUpgrade(unit)
  }

  shouldUnitUpgrade(unitList, unit){
     
    let howManyOfEachUnits = {};

    unitList.forEach((x) => {
      howManyOfEachUnits[x] = (howManyOfEachUnits[x] || 0) + 1;
    });
    
   if (unit === 3){
     //function to remoce 
    let upgradedUnit = upgradeUnit(unit);
     unitList = this.removeUnitsFromArray(unitList, unit)
     unitList.push(upgradedUnit);
   }
    console.log(howManyOfEachUnits);
  }

  removeUnitsFromArray(array, unitToRemove){
    var i = 0;
    while (i < array.length) {
      if (array[i] === unitToRemove) {
        array.splice(i, 1);
      } else {
        ++i;
      }
    }
    return array;


  }


}