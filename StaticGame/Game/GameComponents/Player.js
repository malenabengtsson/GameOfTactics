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

  async shouldUnitUpgrade(unitList, unit){
 let unitName = unit.constructor.name;
    let howManyOfEachUnits = {};
    unitList.forEach((x) => {
      howManyOfEachUnits[x.constructor.name] = (howManyOfEachUnits[x.constructor.name] || 0) + 1;
    });   

    let amountOfUnits = this.getAmountOfUnits(howManyOfEachUnits, unit)

   if (amountOfUnits >= 3){
     let counter = 0;
     unitList.forEach( (unit) => {
        if (unit.constructor.name == unitName && unit.stars === 1){
          counter += 1;
        }
     })
     if(counter === 3){
       unitList = this.removeUnitsFromArray(unitList, unit)
       let upgradedUnit = unit.upgradeUnit(unit);       
       unitList.push(upgradedUnit);
       alert(`Your ${unit.constructor.name} got upgraded to ${unit.stars} stars and is now stronger!`)
     }
    
   }
  }

  getAmountOfUnits(howManyOfEachUnit, unit){
if(unit.constructor.name === "Dragon"){
  return howManyOfEachUnit.Dragon;
}
else if (unit.constructor.name === "Dwarf"){
  return howManyOfEachUnit.Dwarf;
}
else if (unit.constructor.name === "Human"){
  return howManyOfEachUnit.Human;
}
else if (unit.constructor.name === "Lich"){
  return howManyOfEachUnit.Lich;
}
else if (unit.constructor.name === "Minotaur"){
  return howManyOfEachUnit.Minotaur;
}
else if (unit.constructor.name === "Orc"){
  return howManyOfEachUnit.Orc;
}
else if (unit.constructor.name === "Pixie"){
  return howManyOfEachUnit.Pixie;
}
else if (unit.constructor.name === "Troglodyte"){
  return howManyOfEachUnit.Troglodyte;
}
else if (unit.constructor.name === "Unicorn"){
  return howManyOfEachUnit.Unicorn;
}
else if (unit.constructor.name === "Witch"){
  return howManyOfEachUnit.Witch;
}
    
  }

  removeUnitsFromArray(array, unitToRemove){
    let i = 0;
    while (i < array.length) {
      if (array[i].constructor.name === unitToRemove.constructor.name && array[i].stars === 1) {
        array.splice(i, 1);
      } else {
        ++i;
      }
    }
    return array;
  }

  removeSingleUnitFromArray(array, unitToRemove) {
 let unitIndex  = array.indexOf(unitToRemove);
 if (unitIndex > -1){
   array.splice(unitIndex, 1)
 }
 return array;
  }

  addGold(){
    this.gold += 3;
  }

  attackBoss(boss) {
    let totalDamageToBoss;
    this.unitList.forEach(unit => {
     totalDamageToBoss = unit.getStrengthComparedTo(boss, unit)
    }
      )
    return totalDamageToBoss;
  }
  render() {
    return /*html*/ `
    <div>
    <p class="gold">Your gold: ${this.gold} 💰</p>
    <p class="bigger-title">Your units: ${this.unitList.map(unit => unit.render()).join('')}</p>
    </div>
    `
  }



}