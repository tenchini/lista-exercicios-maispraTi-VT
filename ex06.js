// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync')();

function getTriangleType() {
    let lados = [];
    for (let i = 0; i < 3; i++) {
        while (true) {
            let entrada = prompt(`Digite o ${i + 1}º valor: `);
            let valor = Number(entrada);

            if (isNaN(valor) || valor <= 0 || !Number.isInteger(valor)) {
                console.log('Por favor, digite um número inteiro e positivo.');
                continue;
            } else {
                lados.push(valor);
                break;
            }
        }
    }
    const [a, b, c] = lados;

    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            console.log('Triângulo equilátero');
        } else if (a === b || a === c || b === c) {
            console.log('Triângulo isósceles');
        } else {
            console.log('Triângulo escaleno');
        }
    } else {
        console.log('Não formam um triângulo.');
    }
}

getTriangleType();
