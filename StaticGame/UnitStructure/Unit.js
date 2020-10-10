import Base from '../Base.js'
export default class Unit extends Base{
  
  constructor() {
    super();
    if (this.constructor === Unit) {
      throw('Unit is an abstract class')
    }
  }

  getStrength() {
    return this.magicalDamage + this.physicalDamage;
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
   
    return Math.floor(totalStrengthComparedToBoss);
  }
  
  upgradeUnit(unit) {
    if (unit.stars === 1) {
      unit.stars = 2;
      unit.physicalDamage = unit.physicalDamage * 4.5
      unit.physicalDamage = unit.physicalDamage * 4.5
      unit.magicalDamage = unit.magicalDamage * 4.5
      unit.physicalDefence = unit.physicalDefence * 4.5;
      unit.magicalDefence = unit.magicalDefence * 4.5;
      unit.healthPoints = unit.healthPoints * 4.5;
    }
    else if (unit.stars === 2) {
      unit.stars = 3
      unit.physicalDamage = unit.physicalDamage * 6.5
      unit.physicalDamage = unit.physicalDamage * 6.5
      unit.magicalDamage = unit.magicalDamage * 6.5
      unit.physicalDefence = unit.physicalDefence *6.5;
      unit.magicalDefence = unit.magicalDefence * 6.5;
      unit.healthPoints = unit.healthPoints * 6.5;
    }
    console.log(unit);
    return unit;
  }

  buyUnit() {
    window.currentGame.unitToBeBought(this);
  }
  render() {
    return /*html*/`
    <div class="unit"
    data-click="buyUnit"
    data-id="${this.id}">
    <p class="unit-name">${this.constructor.name}</p>
    <p class="unit-attribute">${this.stars}⭐</p>
    <p class="unit-attribute">${this.healthPoints} health</p>
    <p class="unit-attribute">Cost: ${this.cost} gold</p>
    </div>
    `
  }
}