import readlinesync = require("readline-sync");
import { colors } from "./src/util/colors";
import { Conta } from "./src/util/model/conta";
import { ContaCorrente } from "./src/util/model/contaCorrente";
import { ContaPoupanca } from "./src/util/model/contaPoupanca";
export function main(): void {
    let opcao: number;

    const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000);
    conta.visualizar();
    conta.sacar(10500);
    conta.visualizar();
    conta.depositar(5000);
    conta.visualizar();

    const Contacorrente: ContaCorrente = new ContaCorrente (2, 123 , 1, "Mariana", 15000, 1000);
    Contacorrente.visualizar();
    Contacorrente.sacar(2000);
    Contacorrente.visualizar();
    Contacorrente.depositar(1000);
    Contacorrente.visualizar();

    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();


    while (true) {
        // console.clear(); // limpa o terminal

        // Menu com cores
        console.log(colors.bg.black, colors.fg.yellow);
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
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log(colors.reset);

        // Input da opção
        opcao = readlinesync.questionInt("Entre com a opção desejada: ");

        // Encerrar programa
        if (opcao === 9) {
            console.log(colors.fg.greenstrong, "\nBanco-Raiz sempre com você.");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        // Opções do menu
        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);
                break;

            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", colors.reset);
                break;

            case 3:
                console.log(colors.fg.whitestrong, "\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                break;

            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", colors.reset);
                break;

            case 5:
                console.log(colors.fg.whitestrong, "\n\nApagar uma Conta\n\n", colors.reset);
                break;

            case 6:
                console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);
                break;

            case 7:
                console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);
                break;

            case 8:
                console.log(colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n", colors.reset);
                const conta5 = readlinesync.questionInt("Digite o número da conta: ");
                const valor = readlinesync.questionInt("Digite o valor: ");
                console.log(`Transferindo R$ ${valor} para a conta ${conta5}`);
                const confirmar = readlinesync.question("Deseja confirmar a operação (S/N): ");
                if (confirmar.toLowerCase() === "s") {
                    console.log(`Transferência realizada com sucesso. \nConta:${conta5} \nValor:R$${valor}`);
                } else {
                    console.log("Operação cancelada.");
                }
                break;

            default:
                console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);
                break;
        }

        keyPress();
    }
}

// Info do desenvolvedor
export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Raul Vieira");
    console.log("Email: raul.vieiras2001@gmail.com");
    console.log("GitHub: https://github.com/RaulVieira007/Projeto_Conta_Bancaria");
    console.log("*****************************************************");
}

// Pausar até apertar ENTER
function keyPress(): void {
    console.log(colors.reset);
    console.log("\nPressione ENTER para continuar...");
    readlinesync.prompt();
}

// Executa o programa
main();
