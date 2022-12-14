let btnChangeAttr   = document.querySelector('#btnchangeattr');
let fieldSet        = document.querySelector('#fieldset');


btnChangeAttr.addEventListener('click',()=>{

    if(fieldSet.getAttribute('class')){
        fieldSet.removeAttribute('class');
        return;
    }

    fieldSet.setAttribute('class','colorChange');



})

/*EXERCICE RECEPTION*/
let btn1        = document.querySelector('#btn1');
let btn2        = document.querySelector('#btn2');

let boite1      = document.querySelector('#boite1');
let boite2      = document.querySelector('#boite2');

function toggleMessage(depart, destination){
    let idReception1 = depart.getAttribute('data-reception');
    let idReception2 = destination.getAttribute('data-reception');

    let message = document.querySelector('#'+idReception1).innerHTML;

    destination.removeAttribute('disabled');
    depart.setAttribute('disabled', 'disabled');

    
    document.querySelector('#'+idReception1).innerHTML='';
    document.querySelector('#'+idReception2).innerHTML=message;

    
}

btn1.addEventListener('click',()=>{
    toggleMessage(boite1, boite2);

});

btn2.addEventListener('click',()=>{
    toggleMessage(boite2, boite1);
});