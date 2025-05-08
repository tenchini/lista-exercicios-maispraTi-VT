// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')()

const { shouldContinue } = require('./askToContinue.js')

function getValidNumber(message) {
    while (true) {
        const input = prompt(message)
        const number = Number(input)

        if (!isNaN(number) && Number.isInteger(number)) {
            return number
        }
        console.log('\nPor favor, digite um número inteiro válido.')
    }
}

function requestUserInput() {
    const number = getValidNumber('Digite um número inteiro: ')

    return number
}

function isEvenOrOdd(number) {
    number % 2 === 0
        ? console.log(`\nO número ${number} é par!`)
        : console.log(`\nO número ${number} é ímpar!`)
}

function main() {
    let continueProgram = true

    while (continueProgram) {
        const number = requestUserInput()
        isEvenOrOdd(number)

        console.log('\nDeseja saber outro número?')

        continueProgram = shouldContinue()
    }
}

main()
