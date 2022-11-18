import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _instance = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._instance += 1;
    this._maxLifePoints = 80;
  }

  public static createdRacesInstances(): number {
    return Dwarf._instance;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
