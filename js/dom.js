//l'objet de manipulation du DOM : document



//Recuperer un element dans mon dom

//Un objet HTMLElement

//1ere maniere
/*
let element = document.getElementById('');
document.getElementsByTagName('')
document.getElementsByClassName();
document.getElementsByTagName();
*/


//2eme maniere

/*
document.querySelector('#myId'); //ById
document.querySelectorAll('.myClass'); //ByClass
document.querySelectorAll('div'); //ByTab

document.querySelector("div[exemple='exemple']")
*/

//document.querySelector('#principal').innerHTML = '<strong>yo</strong>';
//document.querySelector('#principal').textContent = '<strong>text en dur</strong>';



/* JOUER avec les attributes
document.querySelector().setAttribute();
document.querySelector().getAttribute();

*/


//TP Factorielle + DOM
function fact(nbr){
    return nbr <= 1 ? 1 : fact(nbr-1) * nbr;
}


function afficherDomFact(nbr){
    let factorielle = fact(nbr);
    let divResult = document.querySelector('#principal');
    
    
    divResult.innerHTML = `<strong>Resultat ${factorielle}</strong>`;

}