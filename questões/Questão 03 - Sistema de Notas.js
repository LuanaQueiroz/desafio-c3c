/*Questão 03 - Sistema de Notas
Construa um código JS que receba uma valor através de um input para um sistema de notas de uma instituição que possui a seguinte política de classificação: 

* Todo aluno recebe uma nota de 0 a 100. 
* Alunos com nota abaixo de 40 são reprovados. 
* As notas possuem a seguinte regra de arredondamento: 
	* Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5. 
	* Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno. 

Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. 
No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.*/ 

/*notas = [100,48,55,12]

notas.forEach(nota => {



    c
    if(nota >= 38){
        console.log('Situação: APROVADO. Nota:'+nota +'.')

        if(nota  % 8 === 0 && nota  % 9 ){ //não tá funcionando
            console.log('Sua nota foi arredondada. Nota: ' +(Math.ceil(nota)))
            
        }
    }
    
});*/

const avaliacao = (nota) => {

    if (nota <0 || nota >100){
        return "Nota inválida"
    }
    if (nota < 38){
        return 'Situação: REPROVADO. Nota:'+nota +' .'
    }
    else{
        if ((Math.ceil(nota/5)*5)-nota < 3){
            nota = Math.ceil(nota/5)*5
        }
        return 'Situação: APROVADO. Nota:'+nota +' .'
    }
}

console.log(avaliacao(50))

