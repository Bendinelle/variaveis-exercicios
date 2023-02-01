let nome = prompt("Informe o nome completo")
let nasc = prompt("Data de nascimento")
let end = prompt("informe deu endereço")
let cpf = prompt("Informe seu CPF")
let esc = prompt("Informe sua escolaridade")
let cnh = confirm ("Possui CNH ?")
let filhos = Number (prompt("Quantos filhos possui ?"))
let cargo = prompt("Qual seu cargo atual ?")
let sal = Number (prompt("Qual seu salário"))
let comis = Number (prompt("Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero"))
let adm = prompt("Informe o ano de admissão")

console.log(typeof nome,typeof nasc, typeof end, typeof cpf, typeof esc,
    typeof cnh, typeof filhos, typeof cargo, typeof sal, typeof comis, typeof adm)

//imprima no console um relatorio da pessoa colabora.

console.log(`Nome: ${nome}
Nascimento: ${nasc}
Endereço: ${end}
Cpf: ${cpf}
Escolaridade: ${esc}
Cnh: ${cnh}
Filhos: ${filhos}
Cargo: ${cargo}
Salário: ${sal}
Comissão: ${comis}
Admissão: ${adm}

`)