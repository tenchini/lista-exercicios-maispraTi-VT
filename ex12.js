// Crie um programa que exibe a tabuada de um número fornecido pelo usuário
// (de 1 a 10) utilizando um loop for.

const prompt = require('prompt-sync')();

function multiplicationTable() {
    let numero;
    while (true) {
        let entrada = prompt('Digite um número para obter sua tabuada: ');
        numero = Number(entrada);

        if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
            console.log('Por favor, digite um número inteiro e positivo.');
            continue;
        } else {
            break;
        }
    }
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero}x${i} = ${numero * i}`);
    }
}

multiplicationTable();
