// -- Operador Ternário --

// let idade = 17

//let status = idade >= 18 ? "Maior de idade" : "Menor de idade" 
// ? é tipo um if (sucesso da condição), 
// : tipo um else (falha da condição)

// console.log(idade)
// console.log(status)

// -- Coalescência Nula -- 

// let valor = null

// let resultado = valor ?? "Valor padrão" 
// // retorna apenas se for nulo, false passa a ser true 

// console.log(resultado)

// // -- Operadores de Comparação --

// let a = 5, b = 10;

// console.log(a == b);   // false (igualdade, compara valor somente)
// console.log(a === b);  // false (igualdade estrita, valor e tipo)
// console.log(a != b);   // true (diferente)
// console.log(a !== b);  // true (diferente estrito)
// console.log(a < b);    // true (menor que)
// console.log(a > b);    // false (maior que)
// console.log(a <= b);   // true (menor ou igual)
// console.log(a >= b);   // false (maior ou igual)

// // -- Operadores de Lógica --

// let age = 25
// let temCarteira = true 

// if (age >=18 && temCarteira) {console.log("Pode dirigir")} // and

// if (age <18 || temCarteira) {console.log("Não pode Dirigir")} // or

// if (temCarteira) {console.log("Não pode dirigir")} // not (if false)

// let tarefaConcluida = true

// if (tarefaConcluida) {
//     console.log("A tarefa está concluída")
// }

//  let prioridade = 2

// if (prioridade === 3) {
//     console.log("Prioridade alta")
// } else {
//     console.log("Prioridade não é alta")
// }

// console.log(
// prioridade === 3 ? "Prioridade alta" : "Prioridade não é alta") // resumida

// if (prioridade === 1) {
//     console.log("Prioridade baixa")

// } else if (prioridade === 2) {
//     console.log("Prioridade média")

// } else if (prioridade === 3) {
//     console.log("Prioridade alta")

// } else {console.log("Prioridade desconhecida")

// }

// let diaSemana = new Date().getDay()

// console.log(new Date())

// console.log(diaSemana)
//O switch é uma alternativa ao if...else. 
// ele serve para comparar um único valor com vários casos possíveis.
// switch (diaSemana) {
//   case 0:
//     console.log("Domingo");
//         break;
//   case 1:
//     console.log("Segunda-feira");
//         break;
//     case 2:
//     console.log("Terça-feira");
//         break;
//     case 3:
//     console.log("Quarta-feira");
//         break;
//     case 4:
//     console.log("Quinta-feira");
//         break;
//     case 5:
//     console.log("Sexta-feira");
//         break;
//     case 6:
//     console.log("Sábado");
//         break; 

//   default:
//     console.log("Dia inválido");
//         break;
// }


// if (diaSemana === 0 ){console.log("Domingo")}
// else if (diaSemana === 1 ){console.log("Segunda")}
// else if (diaSemana === 2 ){console.log("Terça")}
// else if (diaSemana === 3){console.log("Quarta")}
// else if (diaSemana === 4 ){console.log("Quinta")}
// else if (diaSemana === 5 ){console.log("Sexta")}
// else if (diaSemana === 6 ){console.log("Sábado")}

// i é igual 0, quero que aumente +1 (+(+ = 1)) até continuar menor ou igual que 5
// for (let i = 0;i <= 5;i++) {
//     console.log("Contagem:", i)
// }

// let contador = 0 

// while (contador <= 10) {
//     console.log("Contagem:" + 
//     contador) 
//     contador ++ 
// }

// let numero = 5
// do {
//     console.log("Número é:", numero)
//     numero --
// } while (numero > 0)