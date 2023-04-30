"use strict";
/**
 * arquivo: stringType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo String'
 * data: 14/03/2021
 * author: Glaucia Lemos <@glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
// ==> Exemplo 01 - Single Quotes
let nomeCompleto = 'Gabriel Moscarde';
console.log(nomeCompleto);
// ==> Exemplo 02 - Double Quotes
let funcaoEmpresa = "Vendedor";
console.log(funcaoEmpresa);
// ==> Exemplo 03 - Back Ticks
let nomeEmpresa = 'MM Paletes';
let dadosFuncionario = `Seja bem-vindo ${nomeCompleto}! Você será ${funcaoEmpresa} na empresa ${nomeEmpresa}`;
console.log(dadosFuncionario);
