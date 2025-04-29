// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')();

function read10Times() {
    while (true) {
        let entrada = prompt('Digite um número: ');
        let numero = Number(entrada);

        if (isNaN(numero) || !Number.isInteger(numero)) {
            console.log('Por favor, digite um número INTEIRO válido.');
            continue;
        }

        for (let i = 0; i < 10; i++) {
            console.log(`${i + 1}: ${entrada}`);
        }
        break;
    }
}

read10Times();
