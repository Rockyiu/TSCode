interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

const pessoa: Pessoa = {
  nome: 'Vinicius',
  sobrenome: 'Rodrigues',
};
