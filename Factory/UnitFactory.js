const Dragon = require('../UnitStructure/UnitClasses/Dragon')
const Dwarf = require('../UnitStructure/UnitClasses/Dwarf')
const Human = require('../UnitStructure/UnitClasses/Human')
const Lich = require('../UnitStructure/UnitClasses/Lich')
const Minotaur = require('../UnitStructure/UnitClasses/Minotaur')
const Orc = require('../UnitStructure/UnitClasses/Orc')
const Pixie = require('../UnitStructure/UnitClasses/Pixie')
const Troglodyte = require('../UnitStructure/UnitClasses/Troglodyte')
const Unicorn = require('../UnitStructure/UnitClasses/Unicorn')
const Witch = require('../UnitStructure/UnitClasses/Witch')

module.exports = class UnitFactory {
  constructor(){
    throw new Error("Static")
  }
 
  static createUnits() {
    let classes = [
      Dwarf,
      Human,
      Lich,
      Minotaur,
      Orc,
      Pixie,
      Troglodyte,
      Unicorn,
      Witch
    ]
   
    let random = Math.round(Math.random() * classes.length);
    
    return new classes[random]();
  }

}