function criarAluno(nome) {
    return {
        nome: nome,
        notas: []
    };
}

function adicionarNotas(aluno, nota) {
    aluno.notas.push(nota);
}

function calcularMedia(aluno) {
    const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
    return soma / aluno.notas.length;
}

function situacao(aluno) {
    const media = calcularMedia(aluno);
    if (media < 5) {
        return "Reprovado";
    } else if (media => 5 && media < 7) {
        return "Em recuperação";
    } else {
        return "Aprovado";
    }
}

const alunos = [];

// Loop para ler os dados dos alunos
for (let i = 0; i < 3; i++) {
    const nome = prompt(`Digite o nome do aluno ${i + 1}º:`);
    const aluno = criarAluno(nome);

    for (let j = 0; j < 4; j++) {
        const nota = Number(prompt(`Digite a nota ${j + 1}º do aluno ${nome}:`));
        adicionarNotas(aluno, nota);
    }

    alunos.push(aluno);
}

// Loop para calcular e exibir a média e a situação de cada aluno
for (let a = 0; a < alunos.length; a++) {
    const aluno = alunos[a];
    const media = calcularMedia(aluno);
    const situacaoAluno = situacao(aluno);


alert(`Aluno: ${aluno.nome}
Média: ${media.toFixed(2)}
Situação do Aluno: ${situacaoAluno}`);
}

