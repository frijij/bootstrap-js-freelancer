/* TESTO DELL'ESERCIZIO:

Continuiamo l’esercizio Bootstrap Freelancer e aggiungiamo la componente js di interazione con 
l’utente.
Quando l’utente fa click sul bottone “send” del form, il sito deve calcolare l’ammontare del 
preventivo per le ore di lavoro richieste. Il prezzo orario per una commissione varia in questo modo:
- se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.5€ l’ora
- se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.3€ l’ora
- se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.6€

L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti:
- YHDNU32
- JANJC63
- PWKCN25
- SJDPO96
- POCIE24
Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale. Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido e il prezzo finale viene calcolato senza applicare sconti.
Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” (con 2 decimali e il simbolo dell’euro) in un apposito tag HTML appena sotto il bottone send.

*/
//INIZIO: calcolare il prezzo in base alle informazioni del form

function submitForm(event) {
    //controllo che il form sia collegato correttamente e rimuovo il comportamento di default del submit
    event.preventDefault();
    console.log("Il form funziona.");

    //dichiaro le variabili prezzo per tipo di lavoro 
    const backEndPrice = 20.5;
    const frontEndPrice = 15.3;
    const projectAnalysisPrice = 33.6;

    let hoursRequested = document.getElementById("Hours_Requested").value;
    console.log("Ore di consulenza richieste: " + hoursRequested);
    let jobChosen = document.getElementById("type_of_work").value;
    console.log(jobChosen);

    let totalPrice = selectedOption(jobChosen, backEndPrice, frontEndPrice, projectAnalysisPrice) * hoursRequested;
    console.log(totalPrice);

    // applicazione sconto
    // - creare array con codici sconto
    const discount = 0.75;
    let discountCode = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
    let insertedCode = document.getElementById("inputDiscountCode").value;

    // - controllo che il codice sconto sia nella lista e se c'è applico lo sconto al prezzo 
    let includedCode = isIncluded(discountCode, insertedCode);
    let discountedPrice = 0
    if (includedCode) {
        discountedPrice = totalPrice * discount;
        console.log("Il prezzo scontato è € " + discountedPrice);
    } else {
        discountedPrice = discountedPrice + totalPrice;
        // BONUS 1
        document.getElementById("inputDiscountCode").classList.add("text-danger");
    }


    // stampo il prezzo in forma umana su html
    const divPrice = document.querySelector("div#finalPrice");
    divPrice.innerHTML = ("<p> Il prezzo finale è di € </p>" + discountedPrice.toFixed(2));

}


/* BONUS 2:
Se il codice inserito è valido, dopo aver calcolato il prezzo scontato, eliminare quel codice dall’elenco dei codici sconto disponibili, in modo che non sia più utilizzabile.
*/




//------------------------ FUNZIONI ------------------------
function selectedOption(selection, price1, price2, price3) {
    let userOption = 0
    if (selection == 1) {
        userOption = price1;
    } else if (selection == 2) {
        userOption = price2;
    } else if (selection == 3) {
        userOption = price3;
    }
    console.log("il prezzo per il lavoro scelto è: " + userOption);
    return userOption
}

function isIncluded(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
}