/*
Traccia 2
Scrivi un programma che dato:
- un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza
ripetizioni),
- un array di 10 numeri inseriti dall’utente tramite il prompt.
Verifichi quanti numeri scelti da te sono presenti nell'array principale e
restituisca un risultato del tipo:
2 numeri uguali => ambo
3 numeri uguali => terna
4 numeri uguali => quaterna
5 numeri uguali => cinquina
tutti i numeri uguali => tombola
In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!"
*/



//numeri casuali miei
let numeri_casuali = [];
    
for( let a = 0; a < 10; a++) {
        let dato = Math.floor((Math.random()*90)+1)
        numeri_casuali.push(dato)
    }

console.log(`I miei numeri sono ${numeri_casuali}`);
    

// numeri utente
function chiedi_numeri() {
    
    
    let numeri_utente = [];
    
    for(let i = 0; i < 10; i++) {
        
        let numero = parseInt(prompt(`inserisci i numeri ${i+1}:`))
        
        if (numero >= 1 && numero <=90){
            numeri_utente.push(numero)

        }else{
            console.log(`PER FAVORE INSERISCI UN VALORE VALIDO`); 
        }
    }
    console.log(`i numeri inseriti sono ${numeri_utente}`);
}

chiedi_numeri();




//verifica


    
let numeri_uguali = [];
    
    numeri_casuali.forEach(numero => {
        
        if (numero == numeri_casuali(dato))

            numeri_uguali.push(numero)
    }
);

    
    
switch (numeri_uguali.length) {
    
    case 10:
        console.log(`Hai fatto Tombola`);
        break;
        
    case 5:
        console.log(`Hai fatto Cinquina`);
        break;    
        
    case 4:
        console.log(`Hai fatto Quaterna`);
        break;
        
    case 3:
        console.log(`Hai fatto Terna`);
        break;

    case 2:
        console.log(`Hai fatto Ambo`);
        break;

    default:
        console.log("Mi dispiace, hai perso!");
        break;
    
    }
    
    console.log(`i numeri uguali sono ${numeri_uguali}`);
    

   
   
    




/*
// Genera un array di 10 numeri casuali unici tra 1 e 90
const arrayCasuale = [];
while (arrayCasuale.length < 10) {
    const numero = Math.floor(Math.random() * 90) + 1;
    if (!arrayCasuale.includes(numero)) {
        arrayCasuale.push(numero);
    }
}
console.log("Numeri casuali:", arrayCasuale);

// Richiedi all'utente di inserire 10 numeri
const numeriUtente = [];
console.log("Inserisci 10 numeri (tra 1 e 90):");
while (numeriUtente.length < 10) {
    const numero = parseInt(prompt(`Inserisci il numero ${numeriUtente.length + 1}:`), 10);
    if (numero >= 1 && numero <= 90 && !numeriUtente.includes(numero)) {
        numeriUtente.push(numero);
    } else {
        alert("Numero non valido o già inserito. Riprova.");
    }
}

// Calcola quanti numeri dell'utente sono presenti nell'array casuale
let conteggio = 0;

numeriUtente.forEach(function(numero) {
    if (arrayCasuale.includes(numero)) {
        conteggio++;
    }
});

// Determina il risultato
if (conteggio === 0) {
    console.log("Mi dispiace, hai perso!");
} else if (conteggio === 2) {
    console.log("2 numeri uguali => ambo");
} else if (conteggio === 3) {
    console.log("3 numeri uguali => terna");
} else if (conteggio === 4) {
    console.log("4 numeri uguali => quaterna");
} else if (conteggio === 5) {
    console.log("5 numeri uguali => cinquina");
} else if (conteggio === 10) {
    console.log("Hai fatto tombola!");
} else {
    console.log(`${conteggio} numeri uguali`);
}

*/