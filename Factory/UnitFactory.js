import Dragon from '../UnitStructure/UnitClasses/Dragon'
import Dwarf from '../UnitStructure/UnitClasses/Dwarf'
import Human from '../UnitStructure/UnitClasses/Human'
import Lich from '../UnitStructure/UnitClasses/Lich'
import Minotaur from '../UnitStructure/UnitClasses/Minotaur'
import Orc from '../UnitStructure/UnitClasses/Orc'
import Pixie from '../UnitStructure/UnitClasses/Pixie'
import Troglodyte from '../UnitStructure/UnitClasses/Troglodyte'
import Unicorn from '../UnitStructure/UnitClasses/Unicorn'
import Witch from '../UnitStructure/UnitClasses/Witch'

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