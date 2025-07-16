import ler = require("readline-sync")
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";
import { colors } from "./src/util/Colors";
import { ContaCorrente } from "./src/model/ContaCorrente";

export function header(): void {
  console.log(
    colors.bg.black,
    colors.fg.yellow,
    "                                                "
  );
  console.log(colors.bg.black, colors.fg.yellow, "##################################################");
  console.log(colors.bg.black, colors.fg.yellow, "                                                  ");
  console.log(colors.bg.black, colors.fg.yellow, "                     BANCO RAIZ                    ");
  console.log(colors.bg.black, colors.fg.yellow, "                                                  ");
  console.log(colors.bg.black, colors.fg.yellow, "##################################################");
  console.log(
    colors.reset
  );
}

export function main() {
  let contas: ContaController = new ContaController();

  let opcao,
    numero,
    agencia,
    tipo,
    saldo,
    limite,
    aniversario,
    valor,
    numeroDestino: number;
  let titular: string;
  const tiposContas = ["Conta Corrente", "Conta Poupanca"];

  let conta1: ContaCorrente = new ContaCorrente(
    contas.gerarNumero(),
    123,
    1,
    "João da Silva",
    1000,
    100.0
  );
  contas.cadastrar(conta1);

  let conta2: ContaCorrente = new ContaCorrente(
    contas.gerarNumero(),
    124,
    1,
    "Maria da Silva",
    2000,
    100.0
  );
  contas.cadastrar(conta2);

  let conta3: ContaPoupanca = new ContaPoupanca(
    contas.gerarNumero(),
    125,
    2,
    "Mariana dos Santos",
    4000,
    12
  );
  contas.cadastrar(conta3);

  let conta4: ContaPoupanca = new ContaPoupanca(
    contas.gerarNumero(),
    125,
    2,
    "Juliana Ramos",
    8000,
    15
  );
  contas.cadastrar(conta4);

  contas.listarTodas();

  while (true) {
    console.clear();
    header();
    console.log(
      colors.bg.black,
      colors.fg.yellow,
                                                       "       1 - Nova Conta                           "
    );
    console.log(colors.bg.black, colors.fg.yellow, "         2 - Lista de Contas                      ");
    console.log(colors.bg.black, colors.fg.yellow, "         3 - Buscar Conta por Numero              ");
    console.log(colors.bg.black, colors.fg.yellow, "         4 - Atualizar Dados da Conta             ");
    console.log(colors.bg.black, colors.fg.yellow, "         5 - Deletar Conta                        ");
    console.log(colors.bg.black, colors.fg.yellow, "         6 - Sacar                                ");
    console.log(colors.bg.black, colors.fg.yellow, "         7 - Depositar                            ");
    console.log(colors.bg.black, colors.fg.yellow, "         8 - Transferencia Entre Contas           ");
    console.log(colors.bg.black, colors.fg.yellow, "         9 - Sair                                 ");
    console.log(colors.bg.black, colors.fg.yellow, "                                                  ");
    console.log(colors.bg.black, colors.fg.yellow, "##################################################");
    console.log(
      colors.reset
    );

    console.log("\nEntre com a opção desejada: ");
    opcao = ler.questionInt("");

    if (opcao == 9) {
      console.clear();
      console.log(
        colors.bg.black,
        colors.fg.yellow,
        "                                                "
      );
      console.log(colors.bg.black, colors.fg.yellow, "##################################################");
      console.log(colors.bg.black, colors.fg.yellow, "                                                  ");
      console.log(colors.bg.black, colors.fg.yellow, "                     BANCO RAIZ                    ");
      console.log(colors.bg.black, colors.fg.yellow, "  O banco que conecta você ao futuro, na sua tela!");
      console.log(colors.bg.black, colors.fg.yellow, "                                                  ");
      console.log(colors.bg.black, colors.fg.yellow, "##################################################");
      console.log(colors.reset);
      sobre();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.clear();
        header();
        console.log(colors.fg.yellow, "\n\nNova Conta\n\n", colors.reset);

        console.log("Digite o numero da agencia: ");
        agencia = ler.questionInt("");
        console.log("Digite o nome do titular da conta: ");
        titular = ler.question("");
        console.log("\nDigite o tipo da conta: ");
        tipo = ler.keyInSelect(tiposContas, "", { cancel: false }) + 1;
        console.log("Digite o saldo da conta:");
        saldo = ler.questionFloat("R$ ");

        switch (tipo) {
          case 1:
            console.log("Digite o limite da conta (R$): ");
            limite = ler.questionFloat("");
            contas.cadastrar(
              new ContaCorrente(
                contas.gerarNumero(),
                agencia,
                tipo,
                titular,
                saldo,
                limite
              )
            );
            break;

          case 2:
            console.log("Digite o dia do aniversario da conta poupanca: ");
            aniversario = ler.questionInt("");
            contas.cadastrar(
              new ContaPoupanca(
                contas.gerarNumero(),
                agencia,
                tipo,
                titular,
                saldo,
                aniversario
              )
            );
            break;
        }

        keyPress();
        break;

      case 2:
        console.clear();
        header();
        console.log(
          colors.fg.yellow,
          "\n\nLista de Contas\n\n",
          colors.reset
        );

        contas.listarTodas();

        keyPress();
        break;

      case 3:
        console.clear();
        header();
        console.log(
          colors.fg.yellow,
          "\n\nBuscar Conta por Numero\n\n",
          colors.reset
        );

        console.log("Digite o numero da conta: ");
        numero = ler.questionInt("");
        contas.procurarPorNumero(numero);

        keyPress();
        break;

      case 4:
        console.clear();
        header();
        console.log(
          colors.fg.yellow,
          "\n\nAtualizar Dados da Conta\n\n",
          colors.reset
        );

        console.log("Digite o numero da conta: ");
        numero = ler.questionInt("");

        let conta = contas.buscarNoArray(numero);

        if (conta != null) {
          console.log("Digite o numero da agencia: ");
          agencia = ler.questionInt("");

          console.log("Digite o nome do titular da conta: ");
          titular = ler.question("");

          tipo = conta.tipo;

          console.log("\nDigite o saldo da conta: ");
          saldo = ler.questionFloat("R$ ");

          switch (tipo) {
            case 1:
              console.log("Digite o limite da conta: ");
              limite = ler.questionFloat("R$ ");
              contas.atualizar(
                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
              );
              break;

            case 2:
              console.log("Digite o dia do aniversario da conta poupanca: ");
              aniversario = ler.questionInt("");
              contas.atualizar(
                new ContaPoupanca(
                  numero,
                  agencia,
                  tipo,
                  titular,
                  saldo,
                  aniversario
                )
              );
              break;
          }
        } else {
          console.log(`\nA conta numero ${numero} nao foi encontrada!`);
        }

        keyPress();
        break;

      case 5:
        console.clear();
        header();
        console.log(
          colors.fg.yellow,
          "\n\nDeletar Conta\n\n",
          colors.reset
        );

        console.log("Digite o numero da conta: ");
        numero = ler.questionInt("");
        contas.deletar(numero);

        keyPress();
        break;

      case 6:
        console.clear();
        header();
        console.log(colors.fg.yellow, "\n\nSaque\n\n", colors.reset);

        console.log("Digite o numero da conta: ");
        numero = ler.questionInt("");

        console.log("Digite o valor do saque: ");
        valor = ler.questionFloat("R$ ");

        contas.sacar(numero, valor);

        keyPress();
        break;

      case 7:
        console.clear();
        header();
        console.log(colors.fg.yellow, "\n\nDeposito\n\n", colors.reset);

        console.log("Digite o numero da conta: ");
        numero = ler.questionInt("");

        console.log("Digite o valor do deposito: ");
        valor = ler.questionFloat("R$ ");

        contas.depositar(numero, valor);

        keyPress();
        break;

      case 8:
        console.clear();
        header();
        console.log(
          colors.fg.yellow,
          "\n\nTransferencia Entre Contas\n\n",
          colors.reset
        );

        console.log("Digite o numero da conta de origem: ");
        numero = ler.questionInt("");

        console.log("Digite o numero da conta de destino: ");
        numeroDestino = ler.questionInt("");

        console.log("Digite o valor do deposito: ");
        valor = ler.questionFloat("R$ ");

        contas.transferir(numero, numeroDestino, valor);

        keyPress();
        break;

      default:
        console.clear();
        header();
        console.log("\nOpcao Invalida!\n");

        keyPress();
        break;
    }
  }
}

export function keyPress(): void {
  console.log(colors.reset, "");
  console.log("Pressione enter para continuar...");
  ler.prompt();
}

export function sobre(): void {
  console.log("                                                  ");
  console.log("  Projeto Desenvolvido por:                       ");
  console.log("  Raul da Silva Vieira                            ");
  console.log("  E-mail: raul.vieiras2001@gmail.com              ");
  console.log("  GitHub: https://github.com/RaulVieira007        ");
  console.log("                                                  ");
  console.log("##################################################");
  console.log(
    "                                                 ",
    colors.reset
  );
}

main();
