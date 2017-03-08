console.log("First line in JS file: ", Date.now());
var treeContainer = document.getElementById("treeContainer");

var treehouseString = "";
var myBadge; 
function makeDOM(xhrData){
	for (var i = 0; i < xhrData.badges.length; i++) {
		myBadge = xhrData.badges[i];

		treehouseString += `<div class="col-sm-6 col-md-4 cards">`;
		treehouseString += `<h4>${myBadge.name}</h4>`;
		treehouseString += `<img src="${myBadge.icon_url}" alt="" class="img-thumbnail img-responsive">`;
		treehouseString += `</div>`;
	}
		console.log(myBadge);
		treeContainer.innerHTML += treehouseString;

}


function executeThisCodeAfterFileLoaded() {
	console.log("Data Returned: ", Date.now());
	var data = JSON.parse(this.responseText);
	console.log("My Treehouse: ", data);
	makeDOM(data);
}

function executeThisCodeAfterFileFails() {
	console.log("Booooo");

}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "https://teamtreehouse.com/latashasimmons.json");
myRequest.send();
console.log("Last line in JS file: ", Date.now());
