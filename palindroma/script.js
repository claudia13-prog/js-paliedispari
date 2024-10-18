// 1) Chiedere all’utente di inserire una parola

let inputWord = prompt("Inserisci una parola");

console.log(reverseString(inputWord));


// 2) Creare una funzione per capire se la parola inserita è palindroma.

function reverseString(str) {
    // Step 1. Usa il metodo split() per restituire un nuovo array
    let splitString = str.split(""); // var splitString = "hello".split("");
 
    // Step 2. Usa il metodo reverse() per invertire l'array appena creato
    let reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Usa il metodo join() per unire tutti gli elementi della stringa in un array
    let joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Restituisci valore booleano
    return joinArray === str;

}


