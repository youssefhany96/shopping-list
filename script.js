var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBtns = document.getElementsByClassName("delete");
var items = document.getElementsByTagName("li"); 

//toggle the list item
ul.onclick = function(event){
var target = event.target;
target.classList.toggle("done");
}



for (var i = 0; i < deleteBtns.length; i++) {
	deleteBtns[i].onclick = removeParent;
}

function removeParent(evt) {
    evt.target.parentNode.remove();
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	btn.onclick = removeParent;
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// button.addEventListener("click", toggle);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);