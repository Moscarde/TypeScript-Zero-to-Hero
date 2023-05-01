/* eslint-disable prefer-const */
/**
 * arquivo: tupleType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Tuple'
 * data: 28/03/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */

// ==> Exemplo 01 - Uso simples de Tuplas em TypeScript

let pessoa: [string, string, number];
pessoa = ['Gabriel Moscarde', 'Vendedor', 25];
// pessoa = [34, 'Cloud Advocate JavaScript', 'Glaucia Lemos'];

console.log(pessoa);

// ==> Exemplo 02 - Acessando o valor da Tupla

let pessoa1: [string, string, number];
pessoa1 =  ['Gabriel Moscarde', 'Vendedor', 25];

console.log(pessoa1[1]);

// ==> Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels)
let pessoa2: [nome: string, posicao: string, idade: number] =  ['Gabriel Moscarde', 'Vendedor', 25];

console.log(pessoa2);


// ==> Exemplo 04 - Usando Tuplas com Spread Operator

let listaFrutas: [string, ...string[]] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaFrutas);

//==> Exemplo 05 - Lista Heterogênea de Tupla:

let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];
console.log(listaFrutas2);

// ==> Exemplo 06 - Uso de função com Tuplas

function listarPessoas(nomes: string[], idades: number[]) {
    return [...nomes, ...idades]
}

console.log(listarPessoas(['Gabriel', 'Laura'], [25, 22]));


// ==> Exemplo 07 - Labeled Tuples com Spread Operator numa função

type Nome = 
    | [primeiroNome: string, sobrenome: string, idade: number]
    | [primeiroNome: string, nomoMeio: string, sobrenome: string, idade: number]
    
function criarPessoa(...nome: Nome) {
    return [...nome]
}

console.log(criarPessoa('Gabriel', 'da Silva', 'Moscarde', 25))