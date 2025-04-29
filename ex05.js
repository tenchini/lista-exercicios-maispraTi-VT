// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require('prompt-sync')();

function calculateIMC() {
    let peso;
    while (true) {
        let entrada1 = prompt('Qual seu peso? ').replace(',', '.');
        peso = parseFloat(entrada1);

        if (isNaN(peso)) {
            console.log('Peso inválido.');
        } else {
            break;
        }
    }

    let altura;
    while (true) {
        let entrada2 = prompt('Qual sua altura? ').replace(',', '.');
        altura = parseFloat(entrada2);

        if (isNaN(altura)) {
            console.log('Altura inválida.');
        } else {
            if (!entrada2.includes('.')) {
                altura /= 100;
            }
            break;
        }
    }

    let calculoIMC = (peso / (altura * altura)).toFixed(2);
    console.log(`Seu IMC é: ${calculoIMC}`);
}

calculateIMC();
