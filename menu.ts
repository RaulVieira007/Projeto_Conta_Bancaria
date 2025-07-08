import * as readlineSync from 'readline-sync';

export function main(): void {

    let opcao: number;

    while (true) {
        console.clear(); // Limpa a tela a cada repetição para manter o menu limpo
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                     BANCO RAIZ                      ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Número              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Deletar Conta                        ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferência                        ");
        console.log("            9 - SAIR                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        opcao = readlineSync.questionInt("Entre com a opção desejada: ");

        switch (opcao) {
            case 1:
                console.log("\n\n>>> Criar Conta\n");
                
                break;
            case 2:
                console.log("\n\n>>> Listar todas as Contas\n");
                
                break;
            case 3:
                console.log("\n\n>>> Buscar Conta por Número\n");
                
                break;
            case 4:
                console.log("\n\n>>> Atualizar Dados da Conta\n");
                
                break;
            case 5:
                console.log("\n\n>>> Deletar Conta\n");
                
                break;
            case 6:
                console.log("\n\n>>> Sacar\n");
                
                break;
            case 7:
                console.log("\n\n>>> Depositar\n");
                
                break;
            case 8:
                console.log("\n\n*****Transferência entre Contas*****\n")
                const conta = readlineSync.questionInt("Digite o número da conta:");
                const valor = readlineSync.questionInt("Digite o valor:");
                console.log(`transferindo R$:${valor} para a conta ${conta}`);
                const confirmar = readlineSync.question("Deseja confimar operação (S/N)");
                if (confirmar.toLocaleLowerCase()==="s"){
                    console.log("Transferencia realizada com sucesso.");
                }else{
                    console.log("Operação cancelada.");
                }
                break;
            case 9:
                console.log("\nBANCO-RAIZ Sempre por você!!");
                sobre();
                process.exit(0);
            default:
                console.log("\n>>> Opção Inválida! Tente novamente.\n");
                break;
        }

        readlineSync.question("\nPressione ENTER para continuar...");
    }
}


export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Raul Vieira");
    console.log("Email: raul.vieiras2001@gmail.com");
    console.log("https://github.com/RaulVieira007/Projeto_Conta_Bancaria");
    console.log("*****************************************************");
}

// Executa o programa
main();
