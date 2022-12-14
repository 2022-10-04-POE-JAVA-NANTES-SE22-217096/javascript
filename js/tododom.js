/*
Création d'une todolist avec class et array.
*/
class Todos{

    //contructeur de la class qui inialise le tableau
    constructor(){
        this.todos = [];
    }

    //méthode d'ajout (C)
    add(element){
        //push rajoute à la fin du tableau
        this.todos.push(element);
    }

    //méthode remove (D)
    removeByIndex(index){
        //splice supprime x element(s) du tableau (2eme argument) à partir d'un index (premier argument)
        this.todos.splice(index, 1);
    }

    //méthode
    removeByValue(element){

        //recupere l'index par rapport à une valeur
        let index = this.todos.indexOf(element);

        //Est ce que l'élément existe (-1 ce que cela n'existe pas)
        if(index == -1) return;

        //si oui je supprime
        this.todos.removeByIndex(index);


    }
    //méthode update
    update(index, valeur){
        this.todos[index] = valeur;
    }


    //Méthodes Read
    readAll(){

       return this.todos;
    }

    read(index){
        return this.todos[index];
    }

}


let todos = new Todos();
//Je recupere la div principal
let principal = document.querySelector('#principal');
let todo = document.querySelector('#txttodo');


document.querySelector('#btnclick').addEventListener('click',()=>{
    
    todos.add(todo.value);
    
    //je vide le contenu
    principal.innerHTML = '';

    for(let element of todos.readAll()){
        principal.innerHTML += `<span >${element}</span>`;
        principal.innerHTML += '<hr/>';

    }


});