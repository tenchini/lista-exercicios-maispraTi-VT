const prompt = require('prompt-sync')()

function getValidInput(message) {
    while (true) {
        const input = prompt(message)
        const number = Number(input)

        if (number === 1 || number === 2) {
            return number
        }
        console.log('\nPor favor, digite 1 para sim e 2 para não.')
    }
}

function askToContinue() {
    return getValidInput('Digite 1 para SIM e 2 para NÃO: ')
}

function shouldContinue() {
    const doAgain = askToContinue()
    if (doAgain === 2) {
        console.log('\nObrigado por usar o programa! Até mais.')
        return false
    }
    return true
}

module.exports = {
    shouldContinue,
}
