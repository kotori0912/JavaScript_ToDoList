(function(){
  'use strict';
  
  var todoForm = document.getElementById('todo-form');
  var todoList = document.getElementById('todo-list');
  var todoInput = document.querySelector('#todo-form input');
  
  var addItem = function(event) {
    event.preventDefault();
    
    if ( !todoInput.value ) {
      return;
    } 
    
    var checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    
    var span = document.createElement('span');
    span.textContent = todoInput.value;
    
    var label = document.createElement('label');
    label.appendChild(checkBox);
    label.appendChild(span);
    
    var del = function(e) {
      var del_parent = e.target.parentElement;
      todoList.removeChild(del_parent);  
    };

    var delbtn = document.createElement('botton');
    delbtn.textContent = " 削除";
    delbtn.addEventListener('click', del);

    var list = document.createElement('li');
    list.appendChild(label);
    list.appendChild(delbtn);

    todoList.appendChild(list);

    todoInput.value = '';
  };
  
  todoForm.addEventListener('submit', addItem);
})();
