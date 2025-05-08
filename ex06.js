// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync')()
const { shouldContinue } = require('./askToContinue.js')

function getValidNumber(message) {
    while (true) {
        const input = prompt(message)
        const number = Number(input)

        if (!isNaN(number) && number > 0 && Number.isInteger(number)) {
            return number
        }
        console.log('\nPor favor, digite um número inteiro e positivo.')
    }
}

function getUserInput() {
    let triangleSides = []
    for (let i = 0; i < 3; i++) {
        const side = getValidNumber(`Digite o ${i + 1}º valor: `)
        triangleSides.push(side)
    }

    return triangleSides
}

function getTriangleType(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return 'EQUILÁTERO'
        } else if (a === b || a === c || b === c) {
            return 'ISÓSCELES'
        } else {
            return 'ESCALENO'
        }
    } else {
        return 'Não formam um triângulo'
    }
}

function printResult(a, b, c, triangleType) {
    const validTypes = ['EQUILÁTERO', 'ISÓSCELES', 'ESCALENO']
    if (validTypes.includes(triangleType)) {
        console.log(`Os valores: ${a}, ${b} e ${c} formam um triângulo ${triangleType}!\n`)
    } else {
        console.log(`Os valores: ${a}, ${b} e ${c} não formam um triângulo!\n`)
    }
}

function main() {
    let continueProgram = true

    while (continueProgram) {
        const [a, b, c] = getUserInput()
        const triangleType = getTriangleType(a, b, c)
        printResult(a, b, c, triangleType)
        continueProgram = shouldContinue()
    }
}

main()
