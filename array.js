"use strict"

const numeros = [3, 12, 70, 21, 17, 2]

console.log("Array original", numeros)

// MAP -> altera os valores dos elementos do array
//FILTER -> filtra os elementos do array conforme deseja
//REDUCE -> retorna somente um valor,

//Criar um array adicionando 100 a cada elemento
const adiciona100 = (numero) => numero + 100
const numerosMais100 = numeros.map(adiciona100)
console.log ("Números + 100", numerosMais100)

//Criar um array com 50% de desconto
const desconto50Porcento = (valor) => valor * 0.5
const numeros50PorcentoDesconto = numeros.map(desconto50Porcento)
console.log("Desconto de 50%", numeros50PorcentoDesconto)

//Números menores que 20
const eMenor20 = (numero) => numero < 20
const numerosMenores20 = numeros.filter(eMenor20)
console.log("Números menores que 20", numerosMenores20)

// Criar um novo array com os números pares
const ePar = (numero) => numero % 2 == 0
const numerosPares = numeros.filter(ePar)
console.log("Números pares", numerosPares)

//Somar todos os elementos
const soma = (a, b) => a + b
const total = numeros.reduce(soma, 0)
console.log("Soma de todos os elementos", total)

//Soma de todos os elementos pares menores que 20
const resultado = numeros.filter(ePar).filter(eMenor20).reduce(soma, 0)

console.log("Resultado:", resultado)