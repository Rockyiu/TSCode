export class Pessoa{
  constructor(
    private _nome: string,
    private _sobrenome: string,
    private _idade: number,
    private _cpf: string,
  ){
    this._nome = this.nome;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    this.nome = nome;
  }

  get cpf(): string {
    return this._cpf;
  }

  set cpf(cpf: string) {
    this.cpf = cpf;
  }
}


