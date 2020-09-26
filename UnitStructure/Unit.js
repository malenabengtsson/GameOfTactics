module.exports = class Unit {
  
  constructor() {
    if (this.constructor === Unit) {
      throw('Unit is an abstract class')
    }
  }

  getStrength() {
    let result;
    // formula here...
    return result;
  }
  getStrengthComparedTo(enemy, unit) {
    let magicDamageWorth;
    let physicalDamageWorth;
    let totalStrengthComparedToBoss;
    if (enemy.magicalDefence > enemy.physicalDefence) {
       magicDamageWorth = unit.magicalDamage + (unit.magicalDamage * 0.3);
      physicalDamageWorth = unit.physicalDamage * 0.9;
      
    }
    else if (enemy.physicalDefence > enemy.magicalDefence) {
      magicDamageWorth = unit.physicalDamage + (unit.physicalDamage * 0.3);
      physicalDamageWorth = unit.magicalDamage * 0.9;
    }
    else {
      magicDamageWorth = unit.magicalDamage;
      physicalDamageWorth = physicalDamage;
    }

    totalStrengthComparedToBoss = magicDamageWorth + physicalDamageWorth;
    // let chanceToGoFirst = 80;
    // let chance = Math.random() * 100;
    // let whoGoesFirst;
    // if (enemy.getStrength > totalStrengthComparedToBoss) {
    //   if (chance < chanceToGoFirst) {
    //     whoGoesFirst = 'boss';
    //   }
    //   else {
    //     whoGoesFirst = 'unit'
    //   }
      
    // }
    // else {
    //   if (chance < chanceToGoFirst) {
    //     whoGoesFirst = 'unit'
    //   }
    //   else {
    //     whoGoesFirst = 'boss';
    //   }
      
    // }

    return totalStrengthComparedToBoss;
  }
  
  upgradeUnit(unit) {
    if (unit.stars === 1) {
      unit.stars = 2;
    }
    else if (unit.stars === 2) {
      unit.stars === 3
    }
  }
}