// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')();

function calculateAverage() {
    let valores = [];
    while (true) {
        let entrada = prompt('Digite um número decimal: ').replace(',', '.');
        let numeros = Number(entrada);
        if (isNaN(numeros) || numeros < 0) {
            console.log('Por favor, digite um número decimal positivo.');
            continue;
        } else {
            valores.push(numeros);
        }

        if (numeros === 0) {
            valores.pop();
            break;
        }
    }
    let soma = 0;
    for (const n of valores) {
        soma += n;
    }
    let media = soma / valores.length;

    console.log(
        `A média aritmética dos números [${valores.join(
            ', '
        )}] é ${media.toFixed(2)}!`
    );
}

calculateAverage();
