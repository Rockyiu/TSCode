interface PessoaProtocolo<T, U> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = number> ={
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

const aluno2: PessoaProtocolo2 = {
  nome: 'Vinicius',
  sobrenome: 'Rodrigues',
  idade: 20,
}

