const Unit = require('../Unit')
module.exports = class Boss extends Unit{

  physicalDamage = Math.floor(Math.random() * 15) + 1
  magicalDamage = Math.floor(Math.random() * 15) + 1
  physicalDefence = Math.floor(Math.random() * 25) + 1
  magicalDefence = Math.floor(Math.random() * 25) + 1
  healthPoints = 150;
}