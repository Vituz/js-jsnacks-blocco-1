// Snack 4 - 1A
/*
Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10
*/

var Palla = {
    nome: 'palla',
    peso: '10'
}

console.log(Palla);

// Snack 4 - 1B
/*
Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
*/

var modPeso = parseInt(prompt("Modifica il peso della palla"));
Palla.peso = modPeso;
console.log(Palla);

/*

*/