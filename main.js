console.log("First line in JS file: ", Date.now());



function executeThisCodeAfterFileLoaded() {
	console.log("Data Returned: ", Date.now());
	var data = JSON.parse(this.responseText);
	console.log("My Treehouse: ", data);
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
