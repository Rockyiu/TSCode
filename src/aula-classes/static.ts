export class Pessoa{
  constructor(
    public _nome: string,
    public _sobrenome: string,
    public _idade: number,
    public _cpf: string,
  ){}

  static criaPessoa(nome: string, sobrenome: string): Pessoa{
    return new Pessoa(nome, sobrenome, 0, '000.000.000-00');
  }
}


