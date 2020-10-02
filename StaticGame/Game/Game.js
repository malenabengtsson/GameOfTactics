import Base from '../Base.js'
import Player from './GameComponents/Player.js';
import Boss from '../UnitStructure/UnitClasses/Boss.js';
import UnitFactory from '../Factory/UnitFactory.js';

export default class Game extends Base {
buyableUnits = [];
 round = 0;
 player = new Player();
 boss = new Boss();

  constructor() {
    super();
    window.currentGame = this;
    this.start();
    this.render();

   if (this.constructor === Game && this.constructor.instantiated){
     throw('You can only have one game active')
   }
   this.constructor.instantiated = true;
   Game.instance = this;
 }

 static getInstance(){ return Game.instance}

 
 start(){
   this.newRound()
 }

  newRound(){
  this.player.addGold();
  this.round = this.round+1;
  for (let i = 0; i < 5; i++) {
    this.buyableUnits.push(UnitFactory.createUnits()) 
  }
  }
  
  unitToBeBought(unit) {
    let removeFromArray = this.player.buyUnit(unit);
    // if (removeFromArray) {
    //   this.player.removeSingleUnitFromArray(this.buyableUnits, unit)
    // }

    console.log(this.buyableUnits);
  }

  render() {
    document.body.innerHTML = /*html*/`
      <div class="game" data-id="${this.id}">
      <div>${this.buyableUnits.map(unit => unit.render()).join('')}</div>
      <p>${this.player.gold}</p>
      </div>
    `
  }
}