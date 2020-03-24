// email

//Chiedi all’utente la sua email controlla che sia
//nella lista di chi può accedere e stampa un
//messaggio appropriato

// creo array con una lista di mail già caricate
// creo prompt per far inserire all'utente la mail da verificare e confrontare
// con l'array precedentemente inserito.
// creo n messaggi prompt in risposta all'utente ad esempio: email valida, email non valida,
// non è una e-mail ecc.


// creare ciclo for per far contrllare la variabile emailInserita con tutto il contenuto
// dell'array
// creare if dentro al for che compara indirizzo mail inserito con l'operatore == o === else
// che dia un prompt di risposta




var dbEmail = ["mail1@gmail.com","mail2@gmail.com","mail3@gmail.com","mail4@gmail.com","mail5@gmail.com","mail1@yahoo.com","mail2@yahoo.com","mail3@yahoo.com","mail4@yahoo.com","mail5@yahoo.com",];

var emailUtente = prompt("Inserisci la tua mail: ");
var msg;
var checkMail;
console.log(emailUtente);

for (var i = 0; i < dbEmail.length; i++) {
  dbEmail[i];
  if (emailUtente == dbEmail[i]) {
    msg = console.log("Email presente nel database, accesso consentito.");
    document.getElementById('output').innerHTML = emailUtente + " presente in database. Accesso consentito.";
    break;
  } else if (emailUtente != dbEmail[i]) {
    msg = console.log("Email non presente nel database, accesso negato.");
    document.getElementById('output').innerHTML = emailUtente + " non presente in database. Accesso negato.";
  }
}
