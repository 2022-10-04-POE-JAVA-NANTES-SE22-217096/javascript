//Pause synchrone
function pause(ms){
    let debut = Date.now()
    let now = debut;

    while(now - debut < ms){
        now = Date.now();
    }
}

//Function avec un callback
function ope(arithmFunction, arg1, arg2){

    console.log("arg1 arg2");
    console.log(arg1 + " " + arg2);

   arithmFunction(arg1, arg2);
}


//Fonctions anonymes et arrows
//functions anonymes
ope(function(a, b){
    return a+b;
}, 1,2);

ope(function(a, b){
    return a-b;
}, 23,5);


//fonction arrow function
ope((a, b)=> a+b, 1,2);

ope((a, b)=>{
    //une instruction
    //uns instruction
    return a - b;
}, 3, 5);



//exemple fonction flechee
const add = (a,b)=> a +b;

function add(a, b){
    return a + b;
}


add(1,2);


//Template String

function concat(nom, prenom){

    return "hello" + nom + " " + prenom;
}


function concatV2(nom='Doe', prenom='John'){

    return `Hello ${nom} ${prenom}`;


}





//--------------POO avec JavaScript--------------------- 


//Objet litteral

let monObj = {
    firstName : 'Fred',
    formation : 'Poei',
    age:'25',
    sayHello : function(){
        console.log(`Hello ${this.firstName}`);
    }
};


//Objet prototype
function Personne(nom, prenom){
    this.nom    = nom;
    this.prenom = prenom;
    this.info   = 'autre';
}

//Slot
Personne.prototype.sayHello = function(){
    console.log(`Hello ${this.nom} ${this.prenom}`);
};



let bernard = new Personne('Minet', 'bernard');
bernard.sayHello();




//3 manières :
class Hello{

    constructor(name='John Doe'){
        this.name = name;
    }

    get prenom(){

    }



    sayHello(){
        return `hello, ${this.name}`;
    }
}

class HelloFille extends Hello{
    constructor(name){
        super(name);
 
    }

    sayHelloFille(){
        return `hello, ${this.name}, depuis la fille`;
    }


}


let fille = new HelloFille('Freddy Hebrard');

//HelloFille.prenom 

console.log(fille.sayHello());
console.log(fille.sayHelloFille());


//Notion de tableau

let tab = ['va1', 'va2','va3'];
let tab1 = 'element,element,element'.split(',');

let str = tab1.join(',');

tab1[0];

tab.length


//Parcours 1
for(let i = 0; i<= tab.length; i++){
    tab[i]
}

//Parcours 2
for(let valeur of tab){
    console.log(valeur);
}

//Parcours 3
tab.forEach((data)=>{
    console.log(data);
});



//Ajouter et supprimer dans un tableau


//Bout du tableau

//Ajoute un élément à la fin du tableau
tab1.push('element');

//Supprimer le dernier element
let element = tab1.pop();

//Tete du tableau 
shift()
unshift()


//FiFo
tab1.push('element');
tab1.unshift();

//Lifo
tab1.push('element');
tab1.pop();







