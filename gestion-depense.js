const budgetMax = prompt("Veuillez insérer votre budget maximum");

let quit = false;
let depenseString = "";
let ok = true;
const depenses = [];
let depenseTotal = 0;
do {

    depenseString = prompt("Veuillez insérer une dépense (ne rien insérer pour terminer)");
    console.log(depenseString);

    if (depenseString !== "") {

        const depense = parseFloat(depenseString)
        depenseTotal += depense

        if (depenses.includes(depense)) {
            ok = confirm("Cette valeur a déjà été encoder auparavant. L'encoder quand même ?");
        }

        if (depenseTotal <= budgetMax && ok === true) {
            depenses.push(depense);
        }
        else if (ok === false) {
            ok = true;
        }
        else {
            alert("Somme maximale atteinte !")
            depenseTotal -= depense;
            ok = true
            quit = true;
        }
        
    }
    else {
        quit = true;
    }

} while (quit === false)

const budgetView = document.getElementById("budget");
const maxDepenseView = document.getElementById("maxDepense");
const moyenneDepenseView = document.getElementById("moyenneDepense");

budgetView.innerHTML = "Budget restant : " + (budgetMax - depenseTotal)

let depenseMax = 0
for (let index = 0; index < depenses.length; index++) {
    const element = depenses[index];
    
    if (element > depenseMax) {
        depenseMax = element;
    }
}

maxDepenseView.innerHTML = "Dépense maximale : " + depenseMax

moyenneDepenseView.innerHTML = "Dépense moyenne : " + depenseTotal/depenses.length

