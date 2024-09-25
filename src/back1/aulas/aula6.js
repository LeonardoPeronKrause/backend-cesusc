// Exercícios
// 1. Faça um Programa que mostre a mensagem "Alo mundo" na tela.

console.log('Alo mundo');

// 2. Faça um Programa que converta metros para centímetros.

const metro = 10;
const cm = metro * 100;

console.log(`${metro} metro(s) é igual a ${cm}cm`);

// 3. Faça um Programa que pegue 4 notas adicionadas em variáveis e mostre a média.

const n1 = 10;
const n2 = 5;
const n3 = 5;
const n4 = 10;

media = (n1 + n2 + n3 + n4) / 4;

console.log(media);

// ESTRUTURA -> FOR
for (iniciação; condição; incremento) {
    //bloco de código a ser executado
}

// let i = 0; // Exemplo de inicialização
// i < 10; // O loop continua enquanto i for menor que 10
// i++; // Incrementa i em 1 a cada iteração

for (let i = 0; i < 10; i++) {
    console.log(i);
}
