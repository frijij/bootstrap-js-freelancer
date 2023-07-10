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
Alcuni consigli
- Ricordatevi che se non state bene attenti, Javascript vi fa le magie con i tipi :faccia_leggermente_sorridente:
- Ricordatevi che il form ha un comportamento “strano” quando fate click sul bottone Send che è di tipo submit (type=submit).

*/
//INIZIO: calcolare il prezzo in base alle informazioni del form
// - sviluppo backend = 20.5 * numero ore 
// - sviluppo frontend = 15.3 * numero ore
// - analisi di progetto = 33,6 * numero ore 
function submitForm(event) {
    //controllo che il form sia collegato correttamente e rimuovo il comportamento di default del submit
    event.preventDefault();
    console.log("Il form funziona.");

    const backEndPrice = 20.5;
    const frontEndPrice = 15.3;
    const projectAnalysisPrice = 33.6;

    let hoursRequested = document.getElementById("Hours_Requested").value;
    console.log("Ore di consulenza richieste: " + hoursRequested);

    let jobChosen = document.getElementById("type_of_work").value;
    console.log(jobChosen);

    if (jobChosen == 1) {
        let totalPrice = backEndPrice * hoursRequested;
        console.log(totalPrice);
    } else if (jobChosen == 2) {
        let totalPrice = frontEndPrice * hoursRequested;
        console.log(totalPrice);
    } else if (jobChosen == 3) {
        let totalPrice = projectAnalysisPrice * hoursRequested;
        console.log(totalPrice);
    }

}



// applicazione sconto
// - creare array con codici sconto
// - applicare sconto del 25% se lo sconto è nella lista



/*Bonus:
Quando l’utente clicca sul pulsante “Send”, se il codice promozionale inserito non è valido, facciamo diventare quest’ultimo di colore rosso.
Se il codice inserito è valido, dopo aver calcolato il prezzo scontato, eliminare quel codice dall’elenco dei codici sconto disponibili, in modo che non sia più utilizzabile.
*/

//------------------------ FUNZIONI ------------------------
