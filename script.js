var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

var liGet = document.getElementsByTagName("li");

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));	
	ul.appendChild(li);	
	input.value = "";
	// adds xButton with new <li> element
 	var xButton = document.createElement("button");
    xButton.innerText = "X";
    xButton.classList.add("xButton");
    li.appendChild(xButton);
    xButton.addEventListener("click", removeElement);
	// adds "done" class to newly created <li> element
	liGet[i].addEventListener("click", function itemDone() {
	this.classList.toggle("done");
	console.log("adding class is working");
	});
}

function addListAfterClick() {
	if (inputLength() > 0){
		createListElement();
	}
}

function addListAfterKeyPress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeyPress)


// adds "done" class to existed <li> elements

var liGet = document.getElementsByTagName("li");

for (i = 0; i < liGet.length; i++) {
	liGet[i].addEventListener("click", function itemDone() {
	this.classList.toggle("done");
	console.log("adding class is working");
	});
}


// Deinyon Code Version of adding xButton

// var lis = document.querySelectorAll(".item-list li");

// for (var i = 0; i < lis.length; i++) {
//     var li = lis[i];
//     var button = document.createElement("button");
//     button.innerText = "X";
//     li.appendChild(button);
// }



// Add X button next to existing <li> elements

for (i = 0; i < liGet.length; i++) {
	var li = liGet[i];
	var xButton = document.createElement("button");
	xButton.innerHTML = "X";
	xButton.classList.add("xButton");
	// xButton.addEventListener("click", removeElement);
	li.appendChild(xButton);
	console.log("buttons are added");
}


// Removes <li> element from the list as X button is pressed


var xButtonAll = document.getElementsByClassName("xButton");
for (i = 0; i < xButtonAll.length; i++) {
	xButtonAll[i].addEventListener("click", removeElement);
};
	

function removeElement() {
	var li = this.parentElement;
    var ul = li.parentElement;
    ul.removeChild(li);
}
	    // var liGet = document.getElementsByTagName("li");

	    // liGet[i].ul.removeChild(liGet[i]);
	




// function RemoveBtnPush() {
// 	var RemoveBtnPush = document.querySelectorAll("button");
// }


// for (i = 0; i < liGet.length; i++) {
// 	liGet[i].addEventListener("mouseenter", function createRemoveButton()
// 	)
// }
	

// for (i = 0; i < liGet.length; i++) {
// 	function createRemoveButton() 
// 	console.log("adding X btn is working");
// 	}

// 1. Click the item (<li>) will add a button (<button>)
// 2. button will have an X sign on it (<button class = "remove"> X </button>)
// 3. button will have 'delete item' function
// 4. click the button will delete the item (<li> element)
// 5. with deleting an item the button will disappear


// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function() {
// 	console.log("Click!1!")
// })