// -- Operador Ternário --
//let idade = 17

let status = idade >= 18 ? "Maior de idade" : "Menor de idade" 
// ? é tipo um if (sucesso da condição), 
// : tipo um else (falha da condição)

console.log(idade)
console.log(status)

// -- Coalescência Nula --

let valor = null

let resultado = valor ?? "Valor padrão" 
// retorna apenas se for nulo, false passa a ser true 

console.log(resultado)

// -- Operadores de Comparação --

let a = 5, b = 10;

console.log(a == b);   // false (igualdade, compara valor somente)
console.log(a === b);  // false (igualdade estrita, valor e tipo)
console.log(a != b);   // true (diferente)
console.log(a !== b);  // true (diferente estrito)
console.log(a < b);    // true (menor que)
console.log(a > b);    // false (maior que)
console.log(a <= b);   // true (menor ou igual)
console.log(a >= b);   // false (maior ou igual)

// -- Operadores de Lógica --

let idade = 25
let temCarteira= = true