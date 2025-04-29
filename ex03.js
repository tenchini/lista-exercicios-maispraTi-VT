// Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

function getStudentStatus(nota) {
    if (isNaN(nota) || nota > 10 || nota < 0) {
        console.log(
            'Por favor, verifique a nota do aluno. A nota precisa ser um número positivo.'
        );
        return;
    }
    if (nota >= 7) {
        console.log('Aprovado');
    } else if (nota >= 5) {
        console.log('Recuperação');
    } else {
        console.log('Reprovado');
    }
}

getStudentStatus(3.5);
getStudentStatus(6.7);
getStudentStatus(9.8);
getStudentStatus('a');
getStudentStatus(-1);
getStudentStatus(11);
