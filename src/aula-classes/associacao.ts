export class Escritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(private _nome: string){}

  set ferramenta(ferramenta: Ferramenta | null){
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }
  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Não posso escrever sem ferramenta...');
      return;
    }
  }
}

export abstract class Ferramenta {
  constructor (private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} esta escrevendo`);
  }
}
export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} esta digitando`);
  }
}
