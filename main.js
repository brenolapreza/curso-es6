//herança
class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data)
        console.log(this.data)
    }
}

//extendendo List (herdando)
class TodoList extends List{

}

const minhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    minhaLista.add('Novo Todo');
}