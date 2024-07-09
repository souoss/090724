import { log } from "console"

// tipos de variaveis:
const variavel1 // variavel constante
let variavel2 // variavel mutável
var variavel3 // variavel global obs: pouco utilizada
//conceito de local global


const nome = 'João' //variavel constante não permite  trocar valor
let nome1 = 'batista' //variavel mutável permite trocar valor
var nome2 = 'Silva' //variavel global permite trocar valor'
nome ='Pedro'
nome1 ='João'
  var test1-= 'teste1' //variavel global local.


function funcao0 () {
  const test0 = 'teste0' //variavel constante local. 
  return test0
}

function funcao1 (){
  const test0 = 'teste' //variavel constante local.
  return teste {test0, test1}
}
 //condicionais

if(0 < 2){
  console.log (0 é menor que 2)
}
lf (0 < -2){
 console.log (0 é o menor que -2)
}else 
  console,log(0 não é menor que -2)
}

if(0 < -2){
  console.log ('false')
} else if (0 < 2){
  console.log ('verdadeiro')
} else {
  console.log ('Else verdadeiro')
}