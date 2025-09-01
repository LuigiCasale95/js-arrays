const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];
console.log(teachers.length)
for (i = teachers.length -1; i >= 0 ; i--){
  reversedTeachers.push(teachers[i])
} 
console.log(reversedTeachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

/* const longNames = [];
for (i = 0; i <= teachers.length; i++) {
  const nome = teachers[i]
  if (nome.length > 5) {
    longNames.push(nome)
  }
}
console.log(longNames) */

// 3. Rimuovi 'Ed' dall'array teachers

/* const edIndex = teachers.indexOf("Ed")
console.log(edIndex)

teachers.splice(edIndex, 1)
console.log(teachers)
 */
// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = fabio;
if (teachers.indexOf(fabio) !== -1) {
  console.log("Il nume è presente") 
}
  else {
    console.log("Il nome non è presente")
  }

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;