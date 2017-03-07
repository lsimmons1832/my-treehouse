console.log("First line in JS file: ", Date.now());
var treeContainer = document.getElementById("treeContainer");

var treehouseString = "";
var currentTree;
function makeDOM(xhrData){
	for (var i = 0; i < xhrData.treehouse.length; i++) {
		currentTree = xhrData.treehouse[i];

		  treehouseString += `<p src="${currentTree.url}" alt=""></p>`;


	}
	treeContainer.innerHTML += treehouseString;

}


function executeThisCodeAfterFileLoaded() {
	console.log("Data Returned: ", Date.now());
	var data = JSON.parse(this.responseText);
	makeDOM(data);
}

function executeThisCodeAfterFileFails() {
	console.log("Booooo");

}