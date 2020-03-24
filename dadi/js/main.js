//js
//2 Gioco dei dadi, chi fa di più vince.

// simulare lancio dadi con var  per due volte se si lanciano due dadi e poi fare la somma
// confrontare la somma dei due dadi con var secondo lancio

//


var g1dado1 = Math.floor(Math.random() * 6) +1;
var g1dado2 = Math.floor(Math.random() * 6) +1;

console.log(g1dado1);
console.log(g1dado2);

var sommag1 = g1dado1 + g1dado2;

console.log(sommag1);

var g2dado1 = Math.floor(Math.random() * 6) +1;
var g2dado2 = Math.floor(Math.random() * 6) +1;

console.log(g2dado1);
console.log(g2dado2);

var sommag2 = g2dado1 + g2dado2;

console.log(sommag2);


if (sommag1 > sommag2) {
  document.getElementById('dadi').innerHTML ="Risultato g1: " + sommag1 + " " + "Risultato g2: " + sommag2;
  document.getElementById('vincitore').innerHTML =" Ha vinto Giocatore 1!";
} else if (sommag1 < sommag2){
document.getElementById('dadi').innerHTML ="Risultato g1: " + sommag1 + " " + "Risultato g2: " + sommag2;
document.getElementById('vincitore').innerHTML =" Ha vinto Giocatore 2!";
} else if(sommag1 == sommag2){
  document.getElementById('dadi').innerHTML ="Risultato g1: " + sommag1 + " "  + "Risultato g2: " + sommag2;
  document.getElementById('vincitore').innerHTML =" Parità!";
}
