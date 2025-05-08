// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

let prompt = require('prompt-sync')()
const { shouldContinue } = require('./askToContinue')

function getValidnumber(message) {
    while (true) {
        const input = prompt(message)
        const number = Number(input)

        if (!isNaN(number) && number >= 1 && number <= 3 && Number.isInteger(number)) {
            return number
        }
        console.log('\nPor favor, digite um número entre 1 e 3.')
    }
}

function requestUserInput() {
    console.log('Bem-vindo ao sistema que não faz nada, escolha sua opção de forma sábia!\n')
    console.log(
        "[1] Não fazer nada e fechar\n[2] Imprimir um número aleatório de 0 a 10\n[3] Ler 'Obrigado por usar o sistema' e encerrar a execução"
    )

    const option = getValidnumber('Escolha sua opção: ')

    return option
}

function veryUsefulSystem(option) {
    switch (option) {
        case 1:
            console.log('Ok... Tchau!')
            process.exit()
        case 2:
            const number = Math.floor(Math.random() * 11)
            if (number === 0) {
                return `Ainda é azarado bicho, tu tirou ${number}!!!!`
            } else {
                return number
            }
        case 3:
            return 'Obrigado por usar o sistema!'
    }
}

function main() {
    let continueProgram = true

    while (continueProgram) {
        const option = requestUserInput()
        const optionChose = veryUsefulSystem(option)

        console.log(optionChose)

        console.log('\nDeseja usar o menu novamente? \n')

        continueProgram = shouldContinue()
    }
}

main()
