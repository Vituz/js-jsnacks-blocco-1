// Creiamo un array vuoto

var listaNumeri = [];

// Chiediamo all'utente di inserire 6 volte un numero

for (var i = 0; i < 6; i++){

    var insertNumber = Number(prompt("Inserisci un numero"));


    if (insertNumber%2 == 1){
        listaNumeri.push(insertNumber);
    }
}

// se il numero è dispari inserirlo nell'array