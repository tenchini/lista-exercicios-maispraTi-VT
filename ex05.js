// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de result (baixo result, result normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require('prompt-sync')()

const { shouldContinue } = require('./askToContinue.js')

function getValidWeight(message) {
    while (true) {
        const input = prompt(message)
        const weight = parseFloat(input)

        if (!isNaN(weight) && weight >= 30 && weight <= 500) {
            return weight
        }
        console.log('\nPeso inválido! Tente novamente.')
    }
}

function getValidHeight(message) {
    while (true) {
        const input = prompt(message).replace(',', '.')
        let height = parseFloat(input)

        if (!isNaN(height)) {
            if (height > 10) {
                height /= 100
            }
            if (height >= 0.6 && height <= 2.51) {
                return height
            }
        }
        console.log('\nAltura inválida! Tente novamente.')
    }
}

function requestUserHeight() {
    const height = getValidHeight('Digite sua altura: ')
    return height
}

function requestUserWeight() {
    const weight = getValidWeight('Digite seu peso: ')
    return weight
}

function calculateIMC(weight, height) {
    const calculateBMI = weight / (height * height)
    return calculateBMI.toFixed(2)
}

function getCategory(calculateBMI) {
    if (calculateBMI < 18.5) {
        return 'Baixo peso.'
    } else if (calculateBMI < 25) {
        return 'Peso adequado.'
    } else if (calculateBMI < 35) {
        return 'Sobrepeso.'
    } else {
        return 'Obesidade'
    }
}

function main() {
    let continueProgram = true

    while (continueProgram) {
        const userHeight = requestUserHeight()
        const userWeight = requestUserWeight()

        const userBMI = calculateIMC(userWeight, userHeight)
        const userCategory = getCategory(userBMI)

        console.log(`\nSeu IMC é: ${userBMI}, ${userCategory}\n`)

        continueProgram = shouldContinue()
    }
}

main()
