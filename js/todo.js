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

        console.table(this.todos);
    }

    read(index){
        console.log(this.todos[index]);
    }

}

//Exemple d'utilisation
let maTodoList = new Todos();

maTodoList.add(4);
maTodoList.readAll();
