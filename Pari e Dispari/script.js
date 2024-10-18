// 1) L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

const userChoice = prompt("Scegli 'pari' o 'dispari'");
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5:"));

console.log(`Hai scelto ${userChoice}`);
console.log(` Hai scelto il numero ${userNumber}`);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
const computerNumber = getRndInteger(1, 5);
console.log(`Il numero del computer è ${computerNumber}`)

// Sommiamo i due numeri
let sumTwoNumber = userNumber + computerNumber;
console.log(`La somma dei due numeri è ${sumTwoNumber}`);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

const evenOddResult = (evenOdd(sumTwoNumber));
console.log(`La somma dei due numeri è ${evenOddResult}`);





// Function

/*Genera un numero intero random compreso tra min e max intrambi inclusi
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


/* La funzione che definisce se il numero è pari o dispari
 * @param {number} numToCheck
 * @returns {string} "even" se il numero è pari, "odd" se il numero è dispari
 */
function evenOdd(numToCheck) {
    let result = "";
    if(numToCheck % 2 === 0) {
      result = "pari";
    } else {
      result = "dispari";
    }
    return result;
  }