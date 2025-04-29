// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

function isEvenOrOdd(number) {
    if (isNaN(number) || !Number.isInteger(number)) {
        console.log('Por favor, digite um número inteiro válido.');
        return;
    }
    number % 2 === 0
        ? console.log(`O número ${number} é par!`)
        : console.log(`O número ${number} é ímpar!`);
}

isEvenOrOdd(14);
isEvenOrOdd(7);
isEvenOrOdd('a');
isEvenOrOdd(1.3);
isEvenOrOdd(-2);
