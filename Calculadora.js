let valor1 = 0
let valor2 = 0
let operacao

const prompt = require("prompt-sync")({});

console.log('Olá, sou sua calculadora... \n pode me passar os comandos que eu irei realizar as operações')

valor1 = +prompt('Digite um número:')

valor2 = +prompt('Digite mais um núemro:')

operacao = prompt('Agora, digite uma operação:')



let adicaoCal = require("./adicao")
let subtraCal = require("./subtracao")
let divisCal = require("./divisao")
let multCal = require("./multiplicacao")
let porcCal = require("./porcentagem")
