const Log = () => {
    return (target: any, name: string, descriptor: any) => {
          console.info(`call to ${name}`);
    return descriptor; };
    };


/*
Création d'une todolist avec class et array.
*/
class Todos{
    private _todos:Array<String>;


    public get todos(){
        return this._todos;
    }

    public set todos(value:Array<String>){
        this._todos = value;
    }
    //contructeur de la class qui inialise le tableau

   
    constructor(){
        this.todos = [];
    }

    //méthode d'ajout (C)
    @Log()
    public add(element:String):void{
        //push rajoute à la fin du tableau
        this.todos.push(element);
    }

    //méthode remove (D)
    public removeByIndex(index:number):void{
        //splice supprime  element(s) du tableau (2eme argument) à partir d'un index (premier argument)
        this.todos.splice(index, 1);
    }

    //méthode
    public removeByValue(element):void{

        //recupere l'index par rapport à une valeur
        let index = this.todos.indexOf(element);

        //Est ce que l'élément existe (-1 ce que cela n'existe pas)
        if(index == -1) return;

        //si oui je supprime
        this.removeByIndex(index);


    }
    //méthode update
    public update(index, valeur):void{
        this.todos[index] = valeur;
    }


    //Méthodes Read
    @Log()
    public readAll():Array<String>{

       return this.todos;
    }

    public read(index):String{
        return this.todos[index];
    }

}


let todos = new Todos();
let result = document.querySelector('#principal') as HTMLDivElement;
let todo = document.querySelector('#txttodo') as HTMLInputElement;


document.querySelector('#btnclick').addEventListener('click',()=>{
    
    todos.add(todo.value);
    
console.log(todos.readAll());
    result.innerHTML = '';

    for(let element of todos.readAll()){
        result.innerHTML += `<span class="exemple">${element}</span>`;
        result.innerHTML += '<hr/>';

    }


});