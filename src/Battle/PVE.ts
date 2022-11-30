import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  _monsters: SimpleFighter[];

  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    this._monsters = monsters;
  }

  playerAlive(): boolean {
    return this.player.lifePoints > 0;
  }

  monsterAlive(): boolean {
    return this._monsters.some(
      (live) => live.lifePoints > 0,
    );
  }

  fight(): number {
    while (this.playerAlive() && this.monsterAlive) {
      this._monsters.forEach((monster) => {
        this.player.attack(monster);
        monster.attack(this.player);
      });
    }
    return super.fight();
  }
}