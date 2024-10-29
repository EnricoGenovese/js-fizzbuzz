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
    if (i % 3 === 0 && i % 5 === 0) {   // gets all numbers perfecly divisible by both 3 and 5 (eg. 15, 30, 45, ect.)
        console.log("FizzBuzz");
    }                   
    //
    else if (i % 3 === 0) {             // does not get numbers like 15 or 45 (already modified by the 'if' above)
        console.log("Fizz");
    } 
    //
    else if (i % 5 === 0) {             // all remaining numbers divisible by 5 are modified (eg. 25, 50, 80, etc)
        console.log("Buzz");
    }
    //
    else console.log(i)                 // all remaining numbers are printed as integers to the console
}