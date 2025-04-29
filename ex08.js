// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();

function bigger() {
    let opcao1;
    while (true) {
        let entrada1 = prompt('Digite um valor: ');
        opcao1 = parseFloat(entrada1);

        if (isNaN(opcao1)) {
            console.log('Digite um número válido');
        } else {
            break;
        }
    }
    let opcao2;
    while (true) {
        let entrada2 = prompt('Digite um valor: ');
        opcao2 = parseFloat(entrada2);

        if (isNaN(opcao2)) {
            console.log('Digite um número válido');
        } else if (opcao2 === opcao1) {
            console.log(
                'Por favor, digite um número diferente da primeira opção.'
            );
            continue;
        } else {
            break;
        }
    }

    console.log(
        `Valores em ordem crescente: ${Math.min(opcao1, opcao2)}, ${Math.max(
            opcao1,
            opcao2
        )}`
    );
}

bigger();
