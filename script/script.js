"use strict"
console.clear;

/* Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.                       */

// L'esercizio necessita di un ciclo 'for', con innestato all'interno un ciclo if per la condizione
// più stringente (multiplo di due interi); le altre due condizioni vanno analizzate separatamente.
// Il restante degli interi va stampato come tale in console.

// 1- Known variables

// L'unica variabile (o meglio costante) necessaria è il numero più alto da restituire a terminale;
// questo fungerà da valore per il quale il ciclo 'for' interromperà l'iterazione.

const numbers = 100;

// 2 For loop: 
// Fizz when n % 3 === 0;
// Buzz when n % 5 === 0;
// FizzBunz when n % 3 === 0 && n % 5 === 0;

for(let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else console.log(i)
}