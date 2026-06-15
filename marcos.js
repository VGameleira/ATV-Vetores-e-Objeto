const alunos = [];

for (let i = 0; i < 3; i++) {
    let nome = prompt(`Digite o nome do aluno ${i + 1}:`);
    const notas = [];

    for (let j = 0; j < 4; j++) {
        let nota = Number(prompt(`Digite a nota ${j + 1} do(a) ${nome}:`));

        while (nota === "" || nota === null || nota < 0 || nota > 10) {
            nota = prompt(`Nota inválida! Digite uma nota entre 0 e 10 para o(a) ${nome}:`);
        }

        notas.push(nota);
    }

    const aluno = {
        nome: nome,
        notas: notas
    };

    alunos.push(aluno);
}

let resultadoFinal = "=== Resultado Final ===\n";

for (let i = 0; i < alunos.length; i++) {
    let aluno = alunos[i];
    let soma = 0;

    resultadoFinal += `Aluno: ${aluno.nome}\n`;
    resultadoFinal += "Notas:\n";

    for (let j = 0; j < aluno.notas.length; j++) {
        resultadoFinal += `  Nota ${j + 1}: ${aluno.notas[j]}\n`;
        soma = soma + aluno.notas[j];
    }

    let media = soma / 4;

    let status = "";

    if (media > 6.99) {
        status = "Aprovado";
    } else if (media >= 5) {
        status = "Em Recuperação";
    } else {
        status = "Reprovado";
    }


    resultadoFinal += `Média: ${media.toFixed(2)} - ${status}\n`;
    resultadoFinal += "---------------------------\n";
}

alert(resultadoFinal);