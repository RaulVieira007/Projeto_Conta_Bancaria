import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {

    private listaContas: Array<Conta> = [];
    private numero: number = 0;

    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.bg.black, colors.fg.yellow, `\nA Conta número: ${conta.numero} foi criada com sucesso!`, colors.reset);
    }

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);
        
        if (buscaConta != null) {
            buscaConta.visualizar();
        } else {
            console.log(colors.bg.black, colors.fg.yellow, `\nA Conta número: ${numero} não foi encontrada.`, colors.reset);
        }
    }

    atualizar(conta: Conta): void {
        const buscaConta = this.buscarNoArray(conta.numero);
        if (buscaConta) {
            const index = this.listaContas.indexOf(buscaConta);
            this.listaContas[index] = conta;
            console.log(colors.bg.black, colors.fg.yellow, `\nA Conta número ${conta.numero} foi atualizada com sucesso!`, colors.reset);
        } else {
            console.log(colors.bg.black, colors.fg.yellow, `\nA Conta número ${conta.numero} não foi encontrada.`, colors.reset);
        }
    }

    deletar(numero: number): void {
        const index = this.listaContas.findIndex(conta => conta.numero === numero);
        if (index !== -1) {
            this.listaContas.splice(index, 1);
            console.log(colors.bg.black, colors.fg.yellow, `\nA Conta número ${numero} foi excluída com sucesso!`, colors.reset);
        } else {
            console.log(colors.bg.black, colors.fg.yellow, `\nA Conta número ${numero} não foi encontrada.`, colors.reset);
        }
    }

    sacar(numero: number, valor: number): void {
        const conta = this.buscarNoArray(numero);
        if (conta) {
            if (conta.sacar(valor)) {
                console.log(colors.bg.black, colors.fg.yellow, `\nSaque de R$${valor} realizado com sucesso!`, colors.reset);
            } else {
                console.log(colors.bg.black, colors.fg.yellow, "\nSaldo insuficiente para saque.", colors.reset);
            }
        } else {
            console.log(colors.bg.black, colors.fg.yellow, `\nConta número ${numero} não encontrada.`, colors.reset);
        }
    }

    depositar(numero: number, valor: number): void {
        const conta = this.buscarNoArray(numero);
        if (conta) {
            conta.depositar(valor);
            console.log(colors.bg.black, colors.fg.yellow, `\nDepósito de R$${valor} realizado com sucesso!`, colors.reset);
        } else {
            console.log(colors.bg.black, colors.fg.yellow, `\nConta número ${numero} não encontrada.`, colors.reset);
        }
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        const contaOrigem = this.buscarNoArray(numeroOrigem);
        const contaDestino = this.buscarNoArray(numeroDestino);

        if (!contaOrigem) {
            console.log(colors.bg.black, colors.fg.yellow, `\nConta origem número ${numeroOrigem} não encontrada.`, colors.reset);
            return;
        }
        if (!contaDestino) {
            console.log(colors.bg.black, colors.fg.yellow, `\nConta destino número ${numeroDestino} não encontrada.`, colors.reset);
            return;
        }

        if (contaOrigem.sacar(valor)) {
            contaDestino.depositar(valor);
            console.log(colors.bg.black, colors.fg.yellow, `\nTransferência de R$${valor} realizada com sucesso!`, colors.reset);
        } else {
            console.log(colors.bg.black, colors.fg.yellow, "\nSaldo insuficiente para transferência.", colors.reset);
        }
    }

    public gerarNumero(): number {
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta;
        }
        return null;
    }
}
