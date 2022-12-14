let btnChangeAttr   = document.querySelector('#btnchangeattr');
let fieldSet        = document.querySelector('#fieldset');


btnChangeAttr.addEventListener('click',()=>{

    if(fieldSet.getAttribute('class')){
        fieldSet.removeAttribute('class');
        return;
    }

    fieldSet.setAttribute('class','colorChange');



})