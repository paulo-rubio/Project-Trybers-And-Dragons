import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _monsters: Array<Monster | SimpleFighter>;
  private _player: Fighter;

  constructor(player: Fighter, monsters: Array<Monster | SimpleFighter>) {
    super(player);

    this._player = player;
    this._monsters = monsters;
  }

  fight(): number {
    while (this.someMonstersAlive() && this.playerAlive()) {
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

  private someMonstersAlive(): boolean {
    return this._monsters.some(
      (item) => item.lifePoints > 0,
    );
  }
}