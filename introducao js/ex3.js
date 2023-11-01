
let salario = parseFloat(prompt("Digite o salário do funcionário:"));


let aumento = salario * 0.15;
let salarioComAumento = salario + aumento;


let impostos = salarioComAumento * 0.08;
let salarioFinal = salarioComAumento - impostos;

console.log("Salário inicial: R$ " + salario.toFixed(2));
console.log("Salário com aumento: R$ " + salarioComAumento.toFixed(2));
console.log("Salário final após desconto de impostos: R$ " + salarioFinal.toFixed(2));
