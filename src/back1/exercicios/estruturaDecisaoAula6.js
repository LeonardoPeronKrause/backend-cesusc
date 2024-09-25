'use strict';

// LISTA DE EXERCÍCIOS JS - ESTRUTURAS DE DECISÃO

// 1 Faça um Programa que tenha duas variáveis contendo números e imprima o maior deles.
/*
const n1 = 10;
const n2 = 11;

if (n1 > n2) {
    console.log(n1);
} else {
    console.log(n2);
};
*/
// 2 Faça um Programa que dado um valor, mostre na tela se o valor é positivo ou negativo.
/*
const valor = -1;

if (valor > 0) {
    console.log('O valor é positivo');
} else if (valor === 0) {
    console.log('O valor é 0')
} else {
    console.log('o valor é negativo');
}
    */
// 3 Faça um Programa que verifique se uma letra em uma variável é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.
/*
const sexo = 'BOYCETA'

if (sexo === 'M') {
    console.log('Masculino')
} else if (sexo === 'F') {
    console.log('Feminino');
} else {
    console.log('Valor inválido');
}
    */
// 4 Faça um Programa que verifique se uma letra digitada é vogal ou consoante.
/*
const letra = 'w';

if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    console.log(`A letra ${letra} é uma vogal`);
} else {
    console.log(`A letra ${letra} é uma consoante`);
}
*/

/* 5 Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve
calcular a média alcançada por aluno e apresentar:

A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Reprovado", se a média for menor do que sete;
A mensagem "Aprovado com Distinção", se a média for igual a dez.*/
/*
const n1 = 10
const n2 = 7
const media = (n1 + n2) / 2

if (media >= 7 && media < 10) {
    console.log('Aprovado');
} else if (media === 10) {
    console.log('Aprovado com Distinção');
} else {
    console.log('Reprovado');
}*/

// 6 Faça um Programa que leia três números e mostre o maior deles.
/*
const n1 = 100;
const n2 = 90;
const n3 = 280;

if (n1 > n2 && n1 > n3) {
    console.log(n1);
} else if (n2 > n1 && n2 > n3) {
    console.log(n2);
} else {
    console.log(n3);
}*/

// 7 Faça um Programa que leia três números e mostre o maior e o menor deles.
/*
const n1 = 1;
const n2 = 2;
const n3 = 3;

const maior = Math.max(n1, n2, n3);
const menor = Math.min(n1, n2, n3);

console.log(maior, menor);
*/

// 8 Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.
/*
const p1 = 150;
const p2 = 130;
const p3 = 120;

const menor = Math.min(p1, p2, p3);

console.log(`O produto que você deve comprar deve ser o ${menor}`);*/

// 9 Faça um Programa que leia três números e mostre-os em ordem decrescente.
/*
const n1 = 1;
const n2 = 5;
const n3 = 30;

if (n1 > n2 && n1 > n3) {
    if (n2 >= n3) {
    console.log(n1, n2, n3);
    } else {
        console.log(n1, n3, n2)
    }
} else if (n2 > n1 && n2 > n3) {
    if (n1 >= n3) {
    console.log(n2, n1, n3);
    } else {
        console.log(n2, n3, n1);
    }
} else {
    if (n1 >= n2) {
    console.log(n3 > n1 > n2)
    } else {
        console.log(n3, n2, n1);
    }
}*/