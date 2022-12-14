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

btn1.addEventListener('click',(){


});

btn2.addEventListener('click',()=>{

}):