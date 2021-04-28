// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.

var numero = prompt("Inserisci un numero");

console.log(numero);

for (var i = 0; i < numero; i++) {

    

    var cubo = Math.pow(numero, 3);

    console.log(cubo);

}