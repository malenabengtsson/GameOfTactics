import Base from '../Base.js'
export default class Unit extends Base{
  
  constructor() {
    super();
    if (this.constructor === Unit) {
      throw('Unit is an abstract class')
    }
  }

  getStrength() {
    // formula here...
    return `Total strength is ${this.magicalDamage + this.physicalDamage}`;
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

  buyUnit() {
    console.log('in buy unit');
    window.currentGame.unitToBeBought(this);
  }
  render() {
    return /*html*/`
    <div class="unit"
    data-click="buyUnit"
    data-id="${this.id}">
    <div>${this.constructor.name}</div>
    </div>
    `
  }
}