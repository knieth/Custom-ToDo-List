let button  = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");


function listLength(){
    return input.value.length;
}

function addButton(list){
  let delBtn = document.createElement("button");
  delBtn.appendChild(document.createTextNode("x"));
  list.appendChild(delBtn);
  delBtn.onclick=removeParent;
  }
function addListandButton(){
  let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    addButton(li);
    ul.appendChild(li);
    input.value = "";
}

function addTodoListOnClick(){
   if(listLength() > 0){
    addListandButton();
  }
}
function addTodoListOnKeyPress(e){
  if(listLength() > 0 && e.keyCode === 13){
    addListandButton();
  }
}

function removeParent(evt){
	evt.target.parentNode.remove();
}



ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}

button.addEventListener("click", addTodoListOnClick);
input.addEventListener("keypress", addTodoListOnKeyPress);