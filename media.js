// --> Calcule um algoritmo que recebe três notas de um aluno, calcule a média e mostre as seguintes mensagens:
// -> Se a média for igual ou maior que 7, aprovado
// -> Se a média por maior e igual a 5 e menor que 7, recuperação
// -> Se a média for menor que 5, reprovado

function calculoMedia(nota1, nota2, nota3) {
     let media = (nota1 + nota2 + nota3) / 3
    console.log(`Suas notas foram: ${nota1}, ${nota2} e ${nota3}, seus status é: `)
     if (media >= 7) {
          return 'Aprovado'
     }
     if (media >= 5 && media < 7) {
          return 'Recuperação'
     }
     if (media < 5) {
          return 'Reprovado'
     }
}

console.log(calculoMedia(1, 5, 3))
