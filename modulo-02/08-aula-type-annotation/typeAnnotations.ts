// Variaveis
let nome: string = 'Gabriel Moscarde';
console.log(nome)

// Arrays
let animais: string[] = ['Girafa', 'Panda', 'Gato']
console.log(animais);

let numerosAleatorios: number[] = [1, 3, 2, 22]
console.log(numerosAleatorios);

// Objetos
let carro: {
    nome: string;
    ano: number;
    preco: number
};

carro = { nome: 'Honda Civic', ano: 2008, preco: 56000 }
console.log(carro)

// Functions
function multiplicarNumero(num1: number, num2: number) {
    return num1 * num2;
}

console.log(multiplicarNumero(2, 3))