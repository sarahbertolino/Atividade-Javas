const nome = "Carlos";
const idade = 20;
const estudante = true;

// newFunction();

// function newFunction() {
//     console.log(nome);
//     console.log(idade);
//     console.log(estudante);

//     console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

//     if (idade >= 18) {
//         console.log("Maior de idade");
//     }
//     else {
//         console.log("Menor de idade");
//     }
// }

// const nomes = [
//     "Pablo",
//     "Uniquoa",
//     "Tasha",
//     "Tayrone",
//     "Austion"

// ]

// console.log(nomes)

// for (let cont = 0; cont < nomes.length; cont++){
//     console.log(nomes[cont]);
// }

// function calcularMedia(nota1, nota2){
//     return (nota1 + nota2) / 2
// }

// const media = calcularMedia(8, 7);

// console.log(media)

// if (media >= 7) {
//     console.log("Aprovado!")
// } else if (media >=5) {
//     console.log("Recuperação!")
// } else {
//     console.log("Reprovado")
//}


// Exercício 1

    const Nome = "Sarah";
    const Idade = 20;
    const cidade = "São Bernardo do Campo";
    const profissao = "jovem aprendiz";

console.log (`Meu nome é ${Nome}, tenho ${Idade} anos, moro em ${cidade} e trabalho como ${profissao}`);

// Exercício 2

const numero1 = 4;
const numero2 = 8;

const soma = numero1 + numero2;
const subtracao = numero1 - numero2;
const multiplicacao = numero1 * numero2;
const divisao = numero1 / numero2;

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);

// Exercício 3
const anos = 12;
const conversaoAnos = anos * 12;
console.log(`Se a pessoa tem ${anos} anos, ela tem também ${conversaoAnos} meses.`);

// Exercício 4

const nota1 = 10;
const nota2 = 9;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3
console.log(`A média é ${media}.`);

// Exercício 5

const idadeatual = 16
    if (idadeatual >= 18) {
        console.log("Maior de idade");
    }
    else {
        console.log("Menor de idade");
    }

// Exercício 6

const numeroEscolhido = 1;
    if (numeroEscolhido > 0) {
        console.log("O número é positivo.");
    }
    else if (numeroEscolhido === 0) {
        console.log("O número é igual a zero.");
    }
    else {
        console.log("O número é negativo.");
    }

// Exercício 7

const parOuimpar = 3;
    if (parOuimpar % 2 === 0) {
        console.log("O número é par.");
    }
    else {
        console.log("O número é ímpar.");
    }

// Exercício 8

function calcularMedia(nota1, nota2){
    return (nota1 + nota2) / 2
}

const Media = calcularMedia(8, 7);

console.log(Media)

if (Media >= 7) {
    console.log("Aprovado!")
} else if (Media >=5) {
    console.log("Recuperação!")
} else {
    console.log("Reprovado")
}

// Exercício 9

const numeroUm = 12;
const numeroDois = 24;

if (numeroUm > numeroDois) {
    console.log(`O número ${numeroUm} é maior.`);
} else if (numeroDois > numeroUm) {
    console.log(`O número ${numeroDois} é maior.`);
} else {
    console.log("Os dois números são iguais.");
}

// Exercício 10
const NumeroUm = 12;
const NumeroDois = 24;
const NumeroTres = 36;

if (NumeroUm >= NumeroDois && NumeroUm >= NumeroTres) {
    console.log(`O número ${NumeroUm} é o maior de todos.`);
} else if (NumeroDois >= NumeroUm && NumeroDois >= NumeroTres) {
    console.log(`O número ${NumeroDois} é maior.`);
} else {
    console.log(`O número ${NumeroTres} é maior.`);
}

// Exercício 11
const precoProduto = 123;
const desconto = (precoProduto / 100) * 10;

if (precoProduto > 100) {
    console.log("Por seu produto valer mais que 100 reais, você vai ter um desconto.");
    console.log(`Preço original: R$ ${precoProduto}`);
    console.log(`Preço com desconto: R$ ${precoProduto - desconto}`);
} else {
    console.log("Por seu produto não valer mais que 100 reais, você não terá desconto.");
    console.log(`Preço final: R$ ${precoProduto}`);
}

// Exercício 12
const idadePessoa = 10;
const estaAutorizada = true;

if (idadePessoa >= 18 && estaAutorizada) {
    console.log(`Você está permitido entrar aqui por ter 18 anos ou mais.`);
}else {
    console.log(`Você não está permitido entrar aqui por não ter 18 anos ou mais.`);
}

// Exercício 13
const nomes = [
    "Pablo",
    "Uniquoa",
    "Tasha",
    "Tayrone",
    "Austin"
]

console.log(nomes)

// Exercício 14
const listaCompras = [
    "Frutas",
    "Pano de Prato",
    "Carne",
    "Panelas",
    "Ovos"
];
console.log(`Total de itens: ${listaCompras.length}`);

console.log("Produtos:", listaCompras);

// Exercício 15
const pessoa = {
    nome: "Sarah",
    idade: 20,
    cidade: "São Bernardo do Campo",
    profissao: "jovem aprendiz"
};

console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos, moro em ${pessoa.cidade} e trabalho como ${pessoa.profissao}.`);
console.log(pessoa);

// Exercício 16
const produtinho = {
    nomezinho: "Caixa de Morango",
    preco: 8,
    categoria: "Frutas",
    disponibilidade: true
};

console.log(`O produto que você está procurando é ${produtinho.nomezinho} que custa ${produtinho.preco} reais, da categoria ${produtinho.categoria} e está disponível:${produtinho.disponibilidade}.`);
console.log(produtinho);

// Exercício 17
const alunos = [
    { nome: "Du", idade: 14 },
    { nome: "Dudu", idade: 15 },
    { nome: "Edu", idade: 16 }
];

console.log(alunos);

// Exercício 18
function calcularDobro(numero) {
    return numero * 2;
}

console.log(`O dobro de 5 é: ${calcularDobro(5)}`);
console.log(`O dobro de 12 é: ${calcularDobro(12)}`);
console.log(`O dobro de -7 é: ${calcularDobro(-7)}`);

// Exercício 19
function calcularSoma(numero, numero2) {
    return numero + numero2;
}

console.log(`A soma de 2 mais 2 é: ${calcularSoma(2, 2)}`);
console.log(`A soma de 35 mais 467 é: ${calcularSoma(35, 467)}`);
console.log(`A soma de -24 mais 24 é: ${calcularSoma(-24, 24)}`);

// Exercício 20
function calcularMedia(nota1, nota2){
    return (nota1 + nota2) / 2 }
    
console.log(`A média entre 10 e 10 é: ${calcularMedia(10, 10)}`);
console.log(`A média entre 2 e 8 é: ${calcularMedia(2, 8)}`);
console.log(`A média entre 9.5 e 7.6 é: ${calcularMedia(9.5, 7.6)}`);

// Exercício 21
const pessoinha = "Ana";

console.log(`Olá ${pessoinha}, seja bem vinda!`)

// Exercício 22
const numeroTabuada = 9;

console.log(`Tabuada do ${numeroTabuada}:`);
console.log(`1 x ${numeroTabuada} = ${1 * numeroTabuada}`);
console.log(`2 x ${numeroTabuada} = ${2 * numeroTabuada}`);
console.log(`3 x ${numeroTabuada} = ${3 * numeroTabuada}`);
console.log(`4 x ${numeroTabuada} = ${4 * numeroTabuada}`);
console.log(`5 x ${numeroTabuada} = ${5 * numeroTabuada}`);
console.log(`6 x ${numeroTabuada} = ${6 * numeroTabuada}`);
console.log(`7 x ${numeroTabuada} = ${7 * numeroTabuada}`);
console.log(`8 x ${numeroTabuada} = ${8 * numeroTabuada}`);
console.log(`9 x ${numeroTabuada} = ${9 * numeroTabuada}`);
console.log(`10 x ${numeroTabuada} = ${10 * numeroTabuada}`);

// Exercício 23
const contagemCrescente = 1;

console.log(`Contagem crescente ${contagemCrescente}:`);

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// Exercício 24
console.log("Contagem regressiva -");
for (let i = 10; i >= 0; i--) {
  console.log(i);


// Exercício 25
console.log("Números pares entre 1 e 50 -");
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Exercício 26
const listaNumeros26 = [10, 20, 30, 40, 50];
const somaLista = listaNumeros26.reduce((acc, curr) => acc + curr, 0);
console.log(`A soma dos valores [${listaNumeros26.join(", ")}] é - ${somaLista}`);


// Exercício 27
const listaNotas27 = [7.5, 8.0, 9.5, 6.0, 7.0];
const somaNotas27 = listaNotas27.reduce((acc, curr) => acc + curr, 0);
const mediaLista27 = somaNotas27 / listaNotas27.length;
console.log(`A média das notas [${listaNotas27.join(", ")}] é - ${mediaLista27.toFixed(2)}`);

// Exercício 28
const produtoEstoque = {
  nome: "Monitor 24 polegadas",
  preco: 899.90,
  quantidadeEstoque: 12
};
if (produtoEstoque.quantidadeEstoque > 0) {
  console.log("unidades em estoque");
} else {
  console.log("está INDISPONÍVEL.");
}

// Exercício 29
const alunoBoletim = {
  nome: "Rafael",
  nota1: 7.5,
  nota2: 8.5
};
const mediaBoletim = (alunoBoletim.nota1 + alunoBoletim.nota2) / 2;
let situacaoBoletim = "";
if (mediaBoletim >= 7.0) {
  situacaoBoletim = "Aprovado";
} else if (mediaBoletim >= 5.0) {
  situacaoBoletim = "Recuperação";
} else {
  situacaoBoletim = "Reprovado";
}
console.log(`--- BOLETIM ---`);
console.log(`Nome - ${alunoBoletim.nome}`);
console.log(`Média - ${mediaBoletim.toFixed(2)}`);
console.log(`Situação - ${situacaoBoletim}`);

// Exercício 30
const sistemaAlunos = [
  { nome: "Ana Silva", nota1: 8.5, nota2: 9.0 },
  { nome: "João Pedro", nota1: 5.5, nota2: 6.0 },
  { nome: "Maria Clara", nota1: 3.5, nota2: 4.0 }
];
console.log("SISTEMA DE ALUNOS");
sistemaAlunos.forEach(aluno => {
  const mediaFinal = (aluno.nota1 + aluno.nota2) / 2;
  let situacao = "";
  if (mediaFinal >= 7.0) {
    situacao = "Aprovado";
  } else if (mediaFinal >= 5.0) {
    situacao = "Recuperação";
  } else {
    situacao = "Reprovado";
  }
  console.log(`Nome - ${aluno.nome}`);
  console.log(`Primeira nota - ${aluno.nota1}`);
  console.log(`Segunda nota - ${aluno.nota2}`);
  console.log(`Média final - ${mediaFinal.toFixed(2)}`);
  console.log(`Situação - ${situacao}`);
  console.log("----------------------------------");
});
}