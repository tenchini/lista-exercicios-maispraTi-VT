// Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require('prompt-sync')();

function sum5Numbers() {
    let soma = 0;

    for (let i = 0; i < 5; i++) {
        let numero;
        while (true) {
            let entrada = prompt('Digite um número inteiro: ');
            numero = Number(entrada);

            if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
                console.log('Por favor, digite um número inteiro e positivo.');
                continue;
            } else {
                break;
            }
        }
        soma += numero;
    }
    console.log(`Soma total: ${soma}`);
}

sum5Numbers();
