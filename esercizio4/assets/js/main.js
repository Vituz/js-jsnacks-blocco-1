// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
//  chiedi all’utente il suo nome 

var listaInvitati = ["Francesco", "Valerio", "Sara", "Silvia"];

var userName = prompt("Come ti chiami?");

var listName = false;

var message;

for (var i = 0; i < listaInvitati.length; i++){

    var invitato = listaInvitati[i];
    if ( invitato === userName){
        listName = true;
    }
   
}

// e comunicagli se può partecipare o no alla festa

if (listName){
    message = "Benvenuto, puoi entrare al party!"
} else {
    message = "Mi dispiace, ma non sei sulla lista degli invitati!"
}

console.log(message);