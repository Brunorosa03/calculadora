const prompt = require("prompt-sync")({});

let valor1 = 0
let valor2 = 0
let operacao

console.log('Olá, sou sua calculadora... \nPasse comandos para eu irei realizar as operações!')

let adicaoCal = require("./adicao")
let subtraCal = require("./subtracao")
let divisCal = require("./divisao")
let multCal = require("./multiplicacao")
let porcCal = require("./porcentagem")

valor1 = +prompt('Digite um número: ')

valor2 = +prompt('Digite mais um núemro: ')
 if(isNaN(valor1)  || isNaN(valor2) ) {
    console.log("Não entendi! Favor digitar o número novamente.")
 } else {
    operacao = prompt('Agora, digite uma operação: ')

    if ( operacao == '+') {
        console.log(adicaoCal(valor1, valor2))
    } else if ( operacao == '-') {
        console.log(subtraCal(valor1, valor2))
    } else if ( operacao == '*') {
        console.log(multCal(valor1, valor2))
    } else if ( operacao == '/') {
        console.log(divisCal(valor1, valor2))
    } else if (operacao == '%') {
        console.log(porcCal(valor1, valor2))
    } else {
        console.log("Operação inválida! Tente novamente.")
    }
 }