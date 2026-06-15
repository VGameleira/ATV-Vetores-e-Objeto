const aluno = {
    nome: "",
    nota1: 0,
    nota2: 0,
    nota3: 0,
    nota4: 0,
    mediaFinal: 0,
    situacao: ""};

    alunos = new Array(3)

    aluno[0].nome = "Juquinha";
    aluno[0].nota1=2;
    aluno[0].nota2=3;
    aluno[0].nota3=8;
    aluno[0].nota4=10;
    aluno[0].mediaFinal=(aluno.nota1+aluno.nota2+aluno.nota3+aluno.nota4)/4;

    alert(aluno.nome+" "+aluno.mediaFinal);

    aluno[1].nome = "Juquinha";
    aluno[1].nota1=2;
    aluno[1].nota2=3;
    aluno[1].nota3=8;
    aluno[1].nota4=10;
    aluno[1].mediaFinal=(aluno.nota1+aluno.nota2+aluno.nota3+aluno.nota4)/4;











//     function criarAluno(nome) {
//     return { nome, notas: [] };
// }

// function adicionarNotas(aluno, notas) {
//     aluno.notas = notas;
// }

// function calcularMedia(aluno) {
//     const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
//     return soma / aluno.notas.length;
// }

// function situacao(aluno) {
//     const media = calcularMedia(aluno);
//     if (media < 5) return "Reprovado";
//     if (media < 7) return "Em recuperação";
//     return "Aprovado";
// }

// const alunos = [];

// // Loop para ler os dados dos alunos
// for (let i = 0; i < 3; i++) {
//     const nome = prompt(`Digite o nome do ${i + 1}º aluno:`);
//     const notas = [];

//     for (let j = 0; j < 4; j++) {
//         const nota = Number(prompt(`Digite a ${j + 1}ª nota do aluno ${nome}:`));
//         notas.push(nota);
//     }

//     const aluno = criarAluno(nome);
//     adicionarNotas(aluno, notas);
//     alunos.push(aluno);
// }

// // Loop para calcular e exibir a média e a situação de cada aluno
// alunos.forEach(aluno => {
//     const media = calcularMedia(aluno);
//     const situacaoAluno = situacao(aluno);

//     alert(`Aluno: ${aluno.nome}
// Média: ${media.toFixed(2)}
// Situação do Aluno: ${situacaoAluno}`);
// });
