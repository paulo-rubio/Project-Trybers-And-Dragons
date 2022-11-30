import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
// import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _monsters: Array<SimpleFighter | Monster>;
  private _player: Fighter;

  constructor(player: Fighter, monsters: Array<SimpleFighter | Monster>) {
    super(player);

    this._player = player;
    this._monsters = monsters;
  }

  fight(): number {
    while (this.playerAlive() && this.monsterAlive()) {
      this._monsters.forEach((monster) => {
        this._player.attack(monster);
        monster.attack(this._player);
      });
    }
    return super.fight();
  }

  private playerAlive(): boolean {
    return this._player.lifePoints > 0;
  }

  private monsterAlive(): boolean {
    return this._monsters.some(
      (live) => live.lifePoints > 0,
    );
  }
}