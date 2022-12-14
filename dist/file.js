var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Log = () => {
    return (target, name, descriptor) => {
        console.info(`call to ${name}`);
        return descriptor;
    };
};
/*
Création d'une todolist avec class et array.
*/
class Todos {
    get todos() {
        return this._todos;
    }
    set todos(value) {
        this._todos = value;
    }
    //contructeur de la class qui inialise le tableau
    constructor() {
        this.todos = [];
    }
    //méthode d'ajout (C)
    add(element) {
        //push rajoute à la fin du tableau
        this.todos.push(element);
    }
    //méthode remove (D)
    removeByIndex(index) {
        //splice supprime  element(s) du tableau (2eme argument) à partir d'un index (premier argument)
        this.todos.splice(index, 1);
    }
    //méthode
    removeByValue(element) {
        //recupere l'index par rapport à une valeur
        let index = this.todos.indexOf(element);
        //Est ce que l'élément existe (-1 ce que cela n'existe pas)
        if (index == -1)
            return;
        //si oui je supprime
        this.removeByIndex(index);
    }
    //méthode update
    update(index, valeur) {
        this.todos[index] = valeur;
    }
    //Méthodes Read
    readAll() {
        return this.todos;
    }
    read(index) {
        return this.todos[index];
    }
}
__decorate([
    Log()
], Todos.prototype, "add", null);
__decorate([
    Log()
], Todos.prototype, "readAll", null);
let todos = new Todos();
let result = document.querySelector('#principal');
let todo = document.querySelector('#txttodo');
document.querySelector('#btnclick').addEventListener('click', () => {
    todos.add(todo.value);
    console.log(todos.readAll());
    result.innerHTML = '';
    for (let element of todos.readAll()) {
        result.innerHTML += `<span class="exemple">${element}</span>`;
        result.innerHTML += '<hr/>';
    }
});
//# sourceMappingURL=file.js.map