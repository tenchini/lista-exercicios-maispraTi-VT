// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

function calculateTotal() {
    let numeroDeMacas;
    console.log('---'.repeat(32));
    console.log(
        'Bem-vindo a loja +PraTi, cada maçã custa R$0,30, comprando 12 ou mais, cada maça sai por R$0,25.'
    );
    console.log('---'.repeat(32));
    while (true) {
        let entrada = prompt('Quantas maçãs deseja comprar? ');
        numeroDeMacas = Number(entrada);

        if (
            isNaN(numeroDeMacas) ||
            numeroDeMacas < 0 ||
            !Number.isInteger(numeroDeMacas)
        ) {
            console.log('Por favor, digite um número positivo e inteiro.');
            continue;
        } else {
            break;
        }
    }
    let total;
    if (numeroDeMacas < 12) {
        total = numeroDeMacas * 0.3;
        console.log(
            `Você comprou ${numeroDeMacas} maçãs, e o valor total SEM PROMOÇÃO foi de R$${total.toFixed(
                2
            )}`
        );
    } else {
        total = numeroDeMacas * 0.25;
        console.log(
            `Você comprou ${numeroDeMacas} maçãs, e o valor total COM PROMOÇÃO foi de R$${total.toFixed(
                2
            )}`
        );
    }
}

calculateTotal();
