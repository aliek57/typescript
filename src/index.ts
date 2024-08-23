// ? function add(n1: number, n2: number){
// ?    return n1+n2;
// ? };

// ? let result = add(3, 1);
// ? console.log(result);

//* tuple
//* let item: [string, number, boolean] = ['Apple', 3, true];

//! enum - mapeamento de informações
// !enum Role {
//  !   admin =1,
//   !  read =2,
//    ! backup=3
// !}

// ? const user = {
//  ?   firstName: 'keila',
//  ?  age: 25,
//   ?  role: Role.admin
// ? }

// ? console.log(user);

//*function void - valor indefinido
//* function result(price: number){
//*     console.log(price);
//* }

//! objeto
//! const pessoa = {
//!     firstName: 'keila',
//!     lastName: 'prado',
//!     age: 25
//! }

//! console.log(pessoa.lastName);

//? unkownn: util pra quando nao sei o tipo do valor e quero impor verificação antes de manipular dado
//? never: ponto do codigo que nao deve ser alcançado

// Dia 3 - exercício 1
// let pi = 3.14159;
// let tau = pi * 2;

// console.log(`${tau} is ${pi} times two.`)

// Dia 3 - exercício 2
// let pie: string;
// pie = 'apple';

// console.log(`I like ${pie}-flavored pie.`);

// Dia 3 - exercício 3
// const sequence: number[] = Array.from(Array(10).keys());
// const animals: string[] = ['macaco', 'jaburu', 'jabucreia'];
// const sAndN: (number | string)[] = [1, 'dois', 3, 'quatro'];
// const allMyArrays: (number | string)[][] = [sequence, animals, sAndN];

// console.log(allMyArrays);

//* TSCONFIG
//* tsc --watch (ou -w) compilar ts sem ter que ficar dando tsc toda hora
//* sourceMap -> ver codigo no console do navegador (ajuda com debug)
//* removeComments -> remove comentarios do arquivo js 
//* noEmitOnError -> mesmo errado vai compilar no arquivo js 
//* strict: true -> pega todos as linhas de baixo e habilita pra true tambem 
//* noImplicityAny -> mostra quando declara alguma coisa com any (reclama)
//* unused locals-> habilitado mostra variavel que nao foi usada
//* unused parameters -> mesma coisa do locals mas com parametros
