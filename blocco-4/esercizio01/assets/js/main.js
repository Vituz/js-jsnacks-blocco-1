/*
1a:
Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10
*/

var Palla = {
    nome: 'palla',
    peso: '10'
}

console.log(Palla);


/*
1B:
Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
*/

var modPeso = prompt("Modifica il peso della palla");
Palla.peso = modPeso;
console.log(Palla);