"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//foi criado uma classe com o método constructor para pode instaciar
var TodoList = /*#__PURE__*/function () {
  function TodoList() {
    _classCallCheck(this, TodoList);

    //crio uma variável que recebe uma array vazia.
    this.todos = [];
  } //criou um método (bem parecido com function)


  _createClass(TodoList, [{
    key: "addTodo",
    value: function addTodo() {
      //esse método recebeu o .push para add uma array nova
      this.todos.push('Novo Todo');
      console.log(this.todos);
    }
  }]);

  return TodoList;
}(); // foi instaciado o TodoList


var minhaLista = new TodoList(); //toda vez que clica no botão, cria uma nova instância e repete todos os métodos estabelecidos

document.getElementById('novotodo').onclick = function () {
  //uma função que retorna o addTodo()
  minhaLista.addTodo();
};
