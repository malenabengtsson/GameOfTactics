import Game from '../Game.js'
import UnitList from './UnitList.js';
export default class Player {
  unitList = new UnitList;
  gold = 0;

  buyUnit(unit){
    if(this.gold >= unit.cost){
      this.unitList.push(unit);
      this.shouldUnitUpgrade(this.unitList, unit)
      this.gold = (this.gold - unit.cost);
      return true;
    }
    else {
      return false;
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

  getGold() {
    return this.gold;
  }


}