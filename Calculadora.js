let valor1 = 0
let valor2 = 0
let operacao

const prompt = require("prompt-sync")({});

valor1 = +prompt('Digite um número:')

valor2 = +prompt('Digite mais um núemro:')

operacao = prompt('Agora, digite uma operação:')

let adicaoCal = require("./adicao")