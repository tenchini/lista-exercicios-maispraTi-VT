// Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//controle if-else.

const prompt = require('prompt-sync')()

const { shouldContinue } = require('./askToContinue')

function getValidnumber(message) {
    while (true) {
        const input = prompt(message)
        const number = Number(input)

        if (!isNaN(number) && number > 0 && number <= 120 && Number.isInteger(number)) {
            return number
        }
        console.log('\nPor favor, digite um idade válida.')
    }
}

function requestUserInput() {
    const age = getValidnumber('Digite sua idade: ')

    return age
}

function verifyAge(age) {
    if (age >= 60) {
        return '\nÉ idoso!'
    } else if (age >= 18) {
        return '\nÉ adulto!'
    } else if (age >= 12 && age < 18) {
        return '\nÉ adolescente!'
    } else {
        return '\nÉ criança!'
    }
}

function main() {
    let continueProgram = true

    while (continueProgram) {
        const age = requestUserInput()
        const ageCategory = verifyAge(age)

        console.log(ageCategory)

        console.log('\nDeseja consultar outra idade? \n')

        continueProgram = shouldContinue()
    }
}

main()
