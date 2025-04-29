// Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')();

function getFactorial() {
    let fat;
    while (true) {
        let entrada = prompt('Digite um valor para ter o fatorial: ');
        fat = Number(entrada);

        if (isNaN(fat) || !Number.isInteger(fat) || fat < 0) {
            console.log('Por favor, digite um número inteiro positivo.');
        } else {
            let total = 1;
            let expressao = '';
            for (let i = fat; i > 0; i--) {
                total *= i;
                expressao += i;

                if (i > 1) {
                    expressao += ' x ';
                }
            }
            console.log(`${fat}! = ${expressao} = ${total}`);
            break;
        }
    }
}

getFactorial();
