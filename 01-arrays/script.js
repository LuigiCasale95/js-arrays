const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log(fourthTeacher)

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
const profIndex = teachers.indexOf("Carlo");
console.log(profIndex);
if (profIndex > -1) {
  teachers.splice(profIndex, 1, "Patrik")
}
console.log(teachers)

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log(lastTeacher);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log(firstTeacher)

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa");
console.log(teachers)
// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah");
console.log(teachers)
// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf("Lewis");
console.log(lewisIndex)

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length === 0;
console.log(isTeachersEmpty)





/*********************************** ESERCITAZIONE IN CLASSE *********************************/
// 1 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

  let primoNumero = parseInt (prompt("Inserisci un numero per verificare il più grande"))
  let secondoNumero = parseInt (prompt("Inserisci un numero per verificare il più grande")) 
  console.log(primoNumero, secondoNumero)
 
 if (primoNumero > secondoNumero) {
  console.log("Il primo numero inserito è più grande ovvero " + primoNumero + " maggiore di " + secondoNumero)
} else if (primoNumero < secondoNumero) {
  console.log("Il secondo numero inserito è più grande ovvero " + secondoNumero + " maggiore di " + primoNumero)
} else {
  console.log("I numeri hanno la stessa grandezza")
}

// 2 L’utente inserisce due parole in successione, con due prompt.  Il software stampa prima la parola più corta, poi la parola più lunga.
 let primaParola = prompt("Inserisci una parola")
 let secondaParola = prompt("Inserisci una parola")

if (primaParola.length > secondaParola.length) {
  console.log(`La parola più corta è ***${secondaParola}*** quella più lunga è ***${primaParola}***`)
} else if (primaParola.length < secondaParola.length) {
    console.log(`La parola più corta è ***${primaParola}*** quella più lunga è ***${secondaParola}***`)
} else {
  console.log("Le parole hanno stessa la lunghezza")
}

/*3 Il software deve chiedere per 5 volte all’utente di inserire un numero.
  Il programma stampa la somma di tutti i numeri inseriti. 
  Esegui questo programma in due versioni, con il for e con il while (facoltativo)*/
   let somma = 0
for (let i = 0; i<=4; i++) {
  let number = parseInt (prompt("Inserisce un numero per fare la somma"))
    console.log("Numero inserito " + number)
    somma = somma + number
}
console.log("il totale è " + somma)

/*4 Crea un array vuoto. 
 Chiedi per 6 volte all’utente di inserire un numero, 
 se è dispari inseriscilo nell’array */

 const contenitoreNumeriDispari = []

 for (let i = 0; i<=5; i++) {
  let number = parseInt (prompt("Inserisce un numero per verificare se dispari"))
  console.log("numeri inseriti " + number)

  
  if (number % 2 === 1) {
    contenitoreNumeriDispari.push(number)

  }
 }
     console.log(`I numeri dispari sono ${contenitoreNumeriDispari}`)