/*let nome 
let idade

console.log(typeof(nome), typeof idade)

/*Foi impresso undefined, por faltar valor 
das variaveis 


nome = prompt("Qual seu nome?")
idade = Number(prompt("Qual sua idade?"))
console.log(typeof(nome), typeof idade)

/*As duas retornaram como string não number


console.log("Olá pessoal, meu nome é", nome, "Eu tenho", idade)
console.log(`Olá ${nome} você tem ${idade}`)
console.log("Olá pessoal, meu nome é " + nome + " Eu tenho " + idade)
*/

let gravata = "Você usa gravata?"
let tem = "Você tem alguma gravata?"
let laço = "Sabe fazer o laço?"


let resp1 = prompt(gravata)
let resp2 = prompt(tem)
let resp3 = prompt(laço)

console.log(resp1, resp2, resp3)
console.log(`
${gravata} - ${resp1}
${tem} - ${resp2}
${laço} - ${resp3}
`)

