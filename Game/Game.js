import Player from './GameComponents/Player';
import Boss from '../UnitStructure/UnitClasses/Boss';
import { createUnits } from '../Factory/UnitFactory';

export default class Game {
buyableUnits = [];
 round = 0;
 player = new Player();
 boss = new Boss();

 constructor(){
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
  console.log('Round ', this.round);
  for (let i = 0; i < 5; i++) {
    this.buyableUnits.push(createUnits()) 
  }
  console.log('Units', this.buyableUnits);
  console.log('Boss', this.boss);
  }
}