// DESAFIOS 1:
//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('H1');
titulo.innerHTML = 'Hora do desafio!';

//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
// no html:  <button onclick="cliquesBotao()" class="container__botao">Chutar</button>
function cliquesBotao() {
    console.log('O botão foi clicado')
}

//Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
// no html:  <button onclick="mensagemAlerta()" class="container__botao">Alerta</button>
function mensagemAlerta() {
    alert('Eu amo JS!')
}

//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
// no html:  <button onclick="promptClicado()" class="container__botao">Prompt</button>
function promptClicado() {
    let cidade = prompt('Digite o nome de uma cidade brasileira:');
    alert(`Estive em ${cidade} e lembrei de você`);
}

//Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
// no html:  <button onclick="somaNumeros()" class="container__botao">Soma</button>
function somaNumeros() {
    let numero1 = prompt('Digite o primeiro número:');
    let numero2 = prompt('Digite o segundo número:');

    let resultado = numero1 + numero2;

    alert(`${numero1} + ${numero2} é igual a ${resultado}`);
}


// DESAFIOS 2
//Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo() {
    console.log('Olá Mundo!');
}

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function cumprimentar(nome) {
    console.log(`Olá ${nome}!`);
}

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobrarNumero(numero) {
    return numero * 2;
}

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media (n1, n2, n3) {
    return n1 + n2 + n3 / 3;
}

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(n1, n2) {
    return n1 > n2 ? n1 : n2;
}

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function quadrado(numero) {
    return numero * numero;
}


// DESAFIOS 3
// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calcularIMC (altura, peso) {
    return peso / (altura * altura);
}

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }

  return fatorial;
}

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function conversaoDolar (dolar) {
    let valorDolar = 4.80;
    let valorEmReais = valorDolar * dolar;
    return valorEmReais.toFixed(2);
}


// DESAFIOS 4
// Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];

//Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];

//Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

// Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let nomes = ['maria', 'joao', 'ana'];
console.log(nomes[0]);

// Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
let nomes = ['maria', 'joao', 'ana'];
console.log(nomes[1]);

//Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
let nomes = ['maria', 'joao', 'ana'];
console.log(nomes[2]);