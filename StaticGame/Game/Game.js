import Base from "../Base.js";
import Player from "./GameComponents/Player.js";
import Boss from "../UnitStructure/UnitClasses/Boss.js";
import UnitFactory from "../Factory/UnitFactory.js";

export default class Game extends Base {
  buyableUnits = [];
  round = 0;
  player = new Player();
  boss = new Boss();
  bossDied = false;

  constructor() {
    super();
    window.currentGame = this;
    this.start();
    this.render();

    if (this.constructor === Game && this.constructor.instantiated) {
      throw "You can only have one game active";
    }
    this.constructor.instantiated = true;
    Game.instance = this;
  }

  static getInstance() {
    return Game.instance;
  }

  start() {
    this.newRound();
  }

  newRound() {
    this.player.addGold();
    this.round = this.round + 1;
    this.buyableUnits = [];
    for (let i = 0; i < 5; i++) {
      this.buyableUnits.push(UnitFactory.createUnits());
    }
    this.boss.upgradeBoss()
    this.render();
  }

  unitToBeBought(unit) {
    let removeFromArray = this.player.buyUnit(unit);
    if (removeFromArray) {
      this.player.removeSingleUnitFromArray(this.buyableUnits, unit);
      this.render();
    }
  }

  attack() {
    let damage = this.player.attackBoss(this.boss);
    if (damage) {
      this.boss.healthPoints = this.boss.healthPoints - damage;
    }
    else {
      this.boss.healthPoints = 0;
    }
    if (this.boss.healthPoints < 0) {
      this.boss.healthPoints = 0;
      alert('The boss died. You won!')
    }
    this.render();
    this.newRound();
  }
  attackButton() {
    return (this.boss.healthPoints > 0 ? '<button data-click="attack" class="btn">Attack</button>' : '<p>Restart the page to play again!</p>')
  }

  rules() {
    document.querySelector('#viewRules').innerHTML = `
    <div class="welcome"> Welcome! <p>
      Buy units by clicking on them.
      </p> <span> Buying three of the same will upgrade the unit to a stronger one!
      </span></div>
    `
  }

  render() {
    document.body.innerHTML = /*html*/ `
      <div class="game" data-id="${this.id}">
     <div id="viewRules"><button data-click="rules" class="btn">Rules</button></div>
      <div class="boss-details">
      Boss healthpoints
      <p class="boss-health">${this.boss.healthPoints} ${
      this.boss.healthPoints > 1 ? "💗" : "💔"}</p>
      </div>
      <p class="bigger-title">Buyable units</p>
      <div>${this.buyableUnits.map((unit) => unit.render()).join("")}</div>
      <div>${this.player.render()}</div>
      <div>${this.attackButton()}</div>
      </div>
    `;
  }
}
