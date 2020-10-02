const UnitList = require('./UnitList')
let unitAction = document.querySelector("#buyableUnits")
unitAction.onclick = buyUnit;
module.exports = class Player {
  unitList = new UnitList;
  gold = 0;


  buyUnit(unit){
    console.log('In function');
    if(this.gold >= unit.cost){
      unitList.push(unit);
      this.shouldUnitUpgrade(unitList, unit)
      gold = (gold - unit.cost);
    }
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

  removeSingleUnitFromArray(array, unitToRemove){
 let unitIndex  = array.indexOf(unitToRemove);
 if (unitIndex > -1){
   array.splice(unitIndex, 1)
 }
 return array;
  }

  addGold(){
    this.gold += 3;
    console.log('Players gold ', this.gold);
  }


}