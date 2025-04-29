// Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//controle if-else.

function verifyAge(age) {
    if (isNaN(age) || age < 0 || !Number.isInteger(age)) {
        console.log('Favor digitar um número inteiro válido.');
        return;
    }
    if (age >= 60) {
        console.log(`É idoso.`);
    } else if (age >= 18) {
        console.log(`É adulto`);
    } else if (age >= 12 && age < 18) {
        console.log(`É adolescente`);
    } else {
        console.log(`É criança`);
    }
}

verifyAge(9);
verifyAge(17);
verifyAge(33);
verifyAge(62);
verifyAge('a');
verifyAge(1.7);
