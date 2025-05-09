export abstract class Personagem {
  protected abstract emoji: string;
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ){}

  atacar(personagem: Personagem): void {
    console.log(`${this.nome} esta atacando...`);
    personagem.perderVida(this.ataque);
  }
  perderVida(forcaAtaque: number): void {
    console.log(`${this.nome} agora tem ${this.vida} de vida...`);
    this.vida -= forcaAtaque;
  }
  abstract bordao(): void;
}

export class Guerreira extends Personagem{
  protected emoji = '\u{1F9DD}';
  bordao(): void {
    console.log('Ataque de espada');
  }
};
export class Monstro extends Personagem{
  protected emoji = '\u{1F9DD}';
  bordao(): void {
    console.log('Ataque de mosntro');
  }
};

const guerreira = new Guerreira( 'Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 50, 1500);
