/*
  Tipos basicos:
  string;
  number
  boolean
  symbol
  bigint
*/

const nome: string = 'Vinicius';
let teste = 'Vinicius';

//Arrays
//Criar array: Array<T> ou T[]
function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}
let arrayNumbers: Array<number> = [1, 2, 3];
let arrayString: Array<string> = ['Vinicius', 'a', '1234'];
let arrayNumbersTwo: number[] = [4, 5, 6];

//Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 30,
  nome: 'Vinicius',
  adulto: true,
};

//Objeto para ser extendido, criando novas chaves
const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;//index signature

} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

//Tuple: É um array com tipos especificos e tamanho fixo;
const dadosCliente: [number, string] = [1, 'String'];
const array: ReadonlyArray<string> = ['Vinicius', 'Rodrigues'];


//Funções
function soma(x: number, y: number) {
  return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y;

//Funções void
function semRetorno(...args: string[]): void {
  console.log('Oi');
}

//Any
function testeAny(msg:any) {
  console.log(msg);
}

//Never: nunca vai retornar nada
function criarErro(): never {
  throw new Error('Erro qualquer');
}

//Enum
enum Cores {
  VERMELHO,
  AZUL,
  AMARELO
}

//Union Types permite que funções tenham mais de um tipo de retorno
function add(a: number | string, b: number | string) {
  if( typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

//Tipos literais: usar valores como tipos
//
//let a: 100 = 100;
let a = 100 as const;

//Type alias: criar um apelido para um tipo, para limpar o código
//Utiliza a palavra type
type Idade = number;
type Objeto = {
  nome: string;
  idade: Idade;
  altura: number;
  corPreferida?: string;
};

const objeto: Objeto = {
  idade: 30,
  nome:'Vinicius',
  altura: 1.80,
}

type CorRgb = 'Vermelho' | 'Verder' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo';
type corPreferida = CorRgb | CorCMYK;

//Intersection types & and
type TemNome = {nome:string};
type TemSobrenome = {sobrenome: string};
type TemIdade = {idade: number};
type Pessoa = TemNome & TemSobrenome & TemIdade;

//Funções como tipo
type MapStringsCallback = (item: string) => string;

function mapStrings(array: string[], callbackfn: MapStringsCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(item));
  }
  return newArray;
}
const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());


//Structural type: Para TS a identidade do tipo não importa, apenas as restrições
type VerifyUserFn = (user: UserActivation, sentValue: User) => boolean;
type User = {username: string; password: string};

// const verifyUser: VerifyUserFn = (user, sentValue) => {
//   return (
//     user.username === sentValue.username && user.password === sentValue.password
//   );
// };
// const bdUser = {username: 'joao', password: '123456'};
// const sentUser = {username: 'joao', password: '123456'};
// const loggedIn = verifyUser(bdUser, sentUser);
// console.log(loggedIn);

//Type assertions: type casting basicamente, coerção de tipos
const body = document.querySelector('body') as HTMLBodyElement;
body.style.background = 'red';



console.log(pessoa);
console.log(nome);
console.log(arrayNumbers);
console.log(arrayString);
console.log(arrayNumbers);
