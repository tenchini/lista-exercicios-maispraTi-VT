// Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')()

const { shouldContinue } = require('./askToContinue.js')

function getValidGrade(message) {
    while (true) {
        const input = prompt(message)
        const grade = parseFloat(input)

        if (!isNaN(grade) && grade >= 0 && grade <= 10) {
            return grade
        }
        console.log('\nPor favor, digite uma nota válida.')
    }
}

function requestUserInput() {
    const grade = getValidGrade('Digite a nota do aluno: ')

    return grade
}

function getStudentStatus(grade) {
    if (grade >= 7) {
        return '\nAprovado'
    } else if (grade >= 5) {
        return '\nRecuperação'
    } else {
        return '\nReprovado'
    }
}

function main() {
    let continueProgram = true

    while (continueProgram) {
        const grade = requestUserInput()
        const gradeStatus = getStudentStatus(grade)

        console.log(gradeStatus)

        console.log('\nDeseja consultar outra nota? ')

        continueProgram = shouldContinue()
    }
}

main()
