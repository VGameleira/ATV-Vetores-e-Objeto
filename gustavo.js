const aluno = {nome: "", nota1: 0, nota2: 0, nota3: 0, nota4: 0, media: 0, situacao: ""};
const alunos = new Array(3);

for (let i = 0; i < alunos.length; i++) {
    alunos[i] = {nome: "", nota1: 0, nota2: 0, nota3: 0, nota4: 0, media: 0, situacao: ""};
    alunos[i].nome = (prompt("Digite o nome do aluno " + (i + 1)));
    alunos[i].nota1 = Number(prompt("Digite a nota 1º do aluno " + (i + 1)));
    alunos[i].nota2 = Number(prompt("Digite a nota 2º do aluno " + (i + 1)));
    alunos[i].nota3 = Number(prompt("Digite a nota 3º do aluno " + (i + 1)));
    alunos[i].nota4 = Number(prompt("Digite a nota 4º do aluno " + (i + 1)));
    alunos[i].media = (alunos[i].nota1 + alunos[i].nota2 + alunos[i].nota3 + alunos[i].nota4) / 4;
    alunos[i].situacao = alunos[i].media >= 6 ? "Aprovado" : "Reprovado";

}

let mensagem = "";
for (let i = 0; i < alunos.length; i++) {
    mensagem +=
        "Aluno: " + alunos[i].nome +
        "\nNota 1: " + alunos[i].nota1 +
        "\nNota 2: " + alunos[i].nota2 +
        "\nNota 3: " + alunos[i].nota3 +
        "\nNota 4: " + alunos[i].nota4 +
        "\nMédia: " + alunos[i].media.toFixed(2) +
        "\nSituação: " + alunos[i].situacao +
        "\n---------------------------\n";
        

        
}

alert(mensagem);