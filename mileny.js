// Classe Aluno
class Aluno {
    constructor(nome) {
        this.nome = nome;
        this.notas = [];
    }

    calcularMedia() {
        let soma = this.notas.reduce((total, nota) => total + nota, 0);
        return soma / this.notas.length;
    }

    verificarSituacao() {
        let media = this.calcularMedia();
        if (media <= 4.99) {
            return "Reprovado";
        } else if (media <= 6.99) {
            return "Em recuperação";
        } else {
            return "Aprovado";
        }
    }
}

// Array para armazenar os alunos
let alunos = [];

// Leitura de dados para 3 alunos
for (let i = 0; i < 3; i++) {
    let nome = prompt(`Digite o nome do aluno ${i + 1}:`);
    let aluno = new Aluno(nome);

    for (let j = 0; j < 4; j++) {
        let nota = parseFloat(prompt(`Digite a nota ${j + 1} do(a) ${nome}:`));
        aluno.notas.push(nota);
    }

    alunos.push(aluno);
}

// Construção da mensagem final
let mensagemFinal = "Resultados Finais:\n\n";
alunos.forEach(aluno => {
    let media = aluno.calcularMedia().toFixed(2);
    let situacao = aluno.verificarSituacao();
    mensagemFinal += `Aluno: ${aluno.nome}\nMédia: ${media}\nSituação: ${situacao}\n\n`;
});

// Exibe os resultados em um alert
alert(mensagemFinal);