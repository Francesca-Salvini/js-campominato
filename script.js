// CONSEGNA 
//
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// COSA CI SERVE
//
// Generare 16 numeri bomba (non duplicati) e li metto in un array
var arrayBombe = []; // dichiaro l'array che conterrà i numeri bomba

var numeriMassimi = 100;
var numeroBombe = 16;
// eseguo un ciclo while che si interromperà quando l'array avrà 16 elementi
// nel ciclo inserisco la funzione Math.random per generare 16 numeri random tra 1 e 100 (compresi)
while(arrayBombe.length < numeroBombe) {
    var randomBombe = generaBomba(numeriMassimi);
    // console.log(randomBombe);

    // per non far inserire nell'array lo stesso numero più volte
    if( !arrayBombe.includes(randomBombe)) {
        arrayBombe.push(randomBombe);
    }
    
}

function generaBomba(max) {
    return Math.floor(Math.random() * max) + 1;
}

console.log(arrayBombe); 
//
// Una variabile array che contenga i numeri (non bombe) inseriti dall'utente

var numeriUtente = [];
//
// Creo una variabile boolean flag che mi dice se è stata trovata una bomba
//

var bombaTrovata = false; 

// Ciclo WHILE (finchè non è stata beccata una bomba && il numero degli elementi inseriti dall'utente è inferiore a 84
// chiede un numero al'utente
//
 
// if -> se è una bomba, cambio la variabile flag

// else -> altrimenti se il numero se non è già stato inserito, viene pushato nell'array dei numeri inseriti dall'utente

    

while( bombaTrovata == false && numeriUtente.length < (numeriMassimi - numeroBombe)) {
    var numeriInseriti = parseInt(prompt('Dimmi un numero'));
    console.log(numeriInseriti);
    
    // se il numero è una bomba
    var isNumeroBomba = isBombaTrovata(numeriInseriti, arrayBombe);

    // se SI : l'utente ha trovato una bomba, bombaTrovata deve diventare TRUE
    // se NO : verifichiamo che il numero NON sia compreso tra quelli già inseriti
    // se è compreso, chiediamo un altro numero
    // se non è compreso, lo aggiungiamo alla lista 
    if(isNumeroBomba == false) {
            
        if(numeriUtente.includes(numeriInseriti) == false) {

                numeriUtente.push(numeriInseriti);

        } else {
                alert('Numero già inserito');
        }
            

        } else {
            alert('Hai trovato una bomba');
            bombaTrovata = true;

        }
    
    }

function isBombaTrovata (numeroInserito, listaBombe) {
        
    var found = false;
    var i = 0 ;

    while ( i < listaBombe.length) {
        var numeroArray = listaBombe[i];

        if ( numeroInserito == numeroArray) {
            found = true
        }

        i++
    }

    return found;
}
    



// Esito della partita
// Stampo all'utente il length dell'array di numeri corretti

var totaleNumeriInseriti = numeriUtente.length;

if(bombaTrovata == true) {
    
alert('Hai perso. Punteggio: ' + totaleNumeriInseriti);

} else {
   
    alert('Hai vinto. Punteggio: ' + totaleNumeriInseriti);
}

