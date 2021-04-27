// Il software deve chiedere per 10 volte all’utente di inserire un numero.

var listaNumeri = [];

var sum = 0;

for (var i = 0; i < 10; i++){

    var posizione = listaNumeri.length+1;

    var number = Number(prompt("Inserisci un numero in posizione " + posizione ))

    listaNumeri.push(number);

    sum += number;

}

console.log(sum);
// Il programma stampa la somma di tutti i numeri inseriti.
