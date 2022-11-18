// construtor👍;
// O atributo name dever ser do tipo string;
// O atributo dexterity dever ser do tipo number;
// name e dexterity devem ser recebidos como parâmetros e inicializados no construtor👍.
// Os atributos da classe Race podem ser lidos, mas não podem ser alterados:
// name deve retornar o tipo string;
// dexterity deve retornar o tipo number.

export default abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(name: string , dexterity: number){
    this._name = name
    this._dexterity = dexterity
  }

  get name(): string{
    return this._name;
  }

  get dexterity(): number{
    return this._dexterity;
  }

  static createdRacesInstances(): number {
      throw new Error ('Not implemented');
  }  
  
  abstract get maxLifePoints(): number;
  
}