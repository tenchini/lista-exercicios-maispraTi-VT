// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

let prompt = require('prompt-sync')();

function veryUsefulSystem() {
    console.log(
        'Bem-vindo ao sistema que não faz nada, escolha sua opção de forma sábia!\n'
    );
    console.log(
        "[1] Não fazer nada e fechar\n[2] Imprimir um número aleatório de 0 a 10\n[3] Ler 'Obrigado por usar o sistema' e encerrar a execução"
    );

    let opcao = Number(prompt('O que deseja fazer?  '));

    switch (opcao) {
        case 1:
            break;
        case 2:
            const number = Math.floor(Math.random() * 11),
                euMenti = 0;
            if (euMenti === 0) {
                console.log(`Ainda é azarado bicho, tu tirou ${euMenti}!!!!`);
            } else {
                console.log(number);
            }
            break;
        case 3:
            console.log('Obrigado por usar o sistema');
            break;
        default:
            console.log(
                'Você tentou um número ou caractere diferente, né? Espertinho.'
            );
            break;
    }
}

veryUsefulSystem();
