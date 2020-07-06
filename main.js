//foi criado uma classe com o método constructor para pode instaciar
class TodoList{
    constructor(){
        //crio uma variável que recebe uma array vazia.
        this.todos = [];
    }
    //criou um método (bem parecido com function)
    addTodo(){
        //esse método recebeu o .push para add uma array nova
        this.todos.push('Novo Todo');
        console.log(this.todos)
    }
}
// foi instaciado o TodoList
const minhaLista = new TodoList();

//toda vez que clica no botão, cria uma nova instância e repete todos os métodos estabelecidos
document.getElementById('novotodo').onclick = function(){
    //uma função que retorna o addTodo()
    minhaLista.addTodo();
}