/*Questão 01 - Tipos de Triângulo
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: 

Equilátero: Os três lados são iguais.
Isósceles: Dois lados iguais.
Escaleno: Todos os lados são diferentes.

Crie um código JS que receba os comprimentos dos lados de um triângulo através de inputs e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo)*/ 

const triangleClassification = (side1, side2, side3)=>{
    
    console.log(side1, side2, side3)
    
    if (side1<=0 || side2<=0 || side3<=0 || side1 === undefined || side2 === undefined || side3 == undefined){
        return "1Por gentileza, informe as medidas corretamente."
    }

    if(side1 === side2 && side1 === side3){
        return "Tipo de triângulo: EQUILÁTERO."
    }
    else if(side1 === side2 || side1 === side3 || side2 === side3){
        return "Tipo de triângulo: ISÓSCELES."
    }
    else{//if(side1 !== side2 && side1 !== side3){
        return "Tipo de triângulo: ESCALENO."
    }
    return "Por gentileza, informe as medidas corretamente."
    
}
console.log(triangleClassification(2,4)) //equilátero
console.log(triangleClassification(2,3,3)) //isósceles
console.log(triangleClassification(1,2,3)) //escaleno