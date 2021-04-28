// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.

var numero = prompt("Inserisci un numero");

console.log("Hai inserito il numero: " + numero);

var counter = 1;

for (var i = 0; i < numero; i++) {

    var cubo = Math.pow(numero, 3);

    if (counter <= numero){

        var counterCube = Math.pow(counter, 3);
        counter++;
        console.log(counterCube);
    }


}

