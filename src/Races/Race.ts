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
  private _instance: number;

  constructor(name: string , dexterity: number, _instance: number){
    this._name = name
    this._instance = _instance
    this._dexterity = dexterity
  }

  static createdRacesInstances(value: number) {
    if(value > this._instance) {
      throw new Error ('Not implemented');
    }
    this._instace -= value;
  }
}