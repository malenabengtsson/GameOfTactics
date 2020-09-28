module.exports = class UnitList extends Array{

  getStrength() {
    var totalStrength = 0;
    for (let unit of this) {
      totalStrength += unit.getStrength();
    }
    return totalStrength;
  }
}