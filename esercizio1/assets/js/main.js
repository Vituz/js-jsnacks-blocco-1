// L'utente inserisce due numeri in successione

var numero_1 = Number(prompt("Inserisci un numero."));

var numero_2 = Number(prompt("Inserisci un altro numero."));


// Il software stampa il maggiore

if (numero_1 === numero_2){
    console.log("I due numero sono uguali, riprova");

} else if ( numero_1 > numero_2){
    console.log(numero_1);

} else {
    console.log(numero_2);
}