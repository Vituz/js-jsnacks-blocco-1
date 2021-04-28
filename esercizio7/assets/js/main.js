// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

var numero = prompt("Inserisci un numero di 4 cifre.");

console.log(numero);

var somma = 0;

var splitString = numero.split("");

console.log(splitString);

for (var i = 0; i < splitString.length; i++){

    somma += parseInt(numero[i]);
}

console.log(somma); 


