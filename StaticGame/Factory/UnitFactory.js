import Dragon from '../UnitStructure/UnitClasses/Dragon.js'
import Dwarf from '../UnitStructure/UnitClasses/Dwarf.js'
import Human from '../UnitStructure/UnitClasses/Human.js'
import Lich from '../UnitStructure/UnitClasses/Lich.js'
import Minotaur from '../UnitStructure/UnitClasses/Minotaur.js'
import Orc from '../UnitStructure/UnitClasses/Orc.js'
import Pixie from '../UnitStructure/UnitClasses/Pixie.js'
import Troglodyte from '../UnitStructure/UnitClasses/Troglodyte.js'
import Unicorn from '../UnitStructure/UnitClasses/Unicorn.js'
import Witch from '../UnitStructure/UnitClasses/Witch.js'

export default class UnitFactory {
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
      Witch,
      Dragon
    ]
   
    let random = Math.round(Math.random() * classes.length);
    
    return new classes[random]();
  }

}