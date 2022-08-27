/*Questão 02 - Bhaskara
Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore um método em JS cujo objetivo é resolver a fórmula de Bhaskara. 

Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. 

Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais.

Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.*/ 



const bhaskara = (ax2, bx, c) =>{
    let resultado = []

    if (ax2 === 0){
        return 'O valor de a não pode ser igual a 0'
    }

    let delta = (bx**2) + (4*ax2*c) 

    if(delta < 0){
        return `Delta com o valor ${delta} é negativo.`
    }

    let n1 = (-bx + Math.sqrt(delta)) / (2*ax2)
    let n2 = (-bx - Math.sqrt(delta)) / (2*ax2)

    resultado.push(n1)
    resultado.push(n2)
    return resultado
}
console.log(bhaskara(1,1,1))
console.log(bhaskara(-1,-2,-3))