let divCreation = document.querySelector("#creation");
let btnCreation = document.querySelector("#btnCreation");
let divResult = document.querySelector("#divResult");


btnCreation.addEventListener('click',(e)=>{

    //créé un element
    let newDiv = document.createElement('div');
    
    //modifie un attribut
    newDiv.setAttribute('class','component');

    //j'injecte mon nouveau composant
    divResult.appendChild(newDiv);



});