import Unit from '../Unit.js'
export default class Boss extends Unit{

  physicalDamage = Math.floor(Math.random() * 30) + 1
  magicalDamage = Math.floor(Math.random() * 30) + 1
  physicalDefence = Math.floor(Math.random() * 25) + 1
  magicalDefence = Math.floor(Math.random() * 25) + 1
  healthPoints = 1500;

  doDamageToUnits(boss, unitList){
    let unitSurvive = [];
    unitList.forEach(unit => {
       let didUnitSurvive = Math.floor(unit.healthPoints - boss.getStrength());
      if (didUnitSurvive > 0){
        unitSurvive.push(unit)
      }
    });
    return unitSurvive;
  }

  upgradeBoss(){
    this.physicalDamage = this.physicalDamage * 1.2;
    this.magicalDamage = this.magicalDamage * 1.2;
    this.physicalDefence = this.physicalDefence * 1.2;
    this.magicalDefence = this.magicalDefence * 1.2;
  }
}
