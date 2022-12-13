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

document.querySelector('#principal').innerHTML = '<strong>yo</strong>';
//document.querySelector('#principal').textContent = '<strong>text en dur</strong>';



/* JOUER avec les attributes
document.querySelector().setAttribute();
document.querySelector().getAttribute();
