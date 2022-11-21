import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  _monsters: SimpleFighter[];

  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    this._monsters = monsters;
  }

  monsterOrPlayerDeath(): boolean {
    const platetAlive = this.player.lifePoints > 0;
    const monsterAlive = this._monsters.some((monster) =>
      monster.lifePoints > 0);
    if (platetAlive && monsterAlive) return false;
    return true;
  }

  fight(): number {
    if (!this.monsterOrPlayerDeath()) {
      this._monsters.forEach((monster) => {
        this.player.attack(monster);
        monster.attack(this.player);
      });
    }
    return super.fight();
  }
}