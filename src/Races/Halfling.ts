import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _instance = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._instance += 1;
    this._maxLifePoints = 60;
  }

  static createdRacesInstances(): number {
    return this._instance;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
