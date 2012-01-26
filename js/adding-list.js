// JavaScript Document

var bullet;

var data = document.getElementById('userInput');	

var list = document.getElementById('myList');	
console.log(data.value);

document.getElementById('addlist').addEventListener('click', function (ev) {
	
	bullet = document.createElement('li');
	//var bullet = document.getElementById("myList").appendChild(document.createElement("li"));
	
	bullet.className = 'bullet';
	
	bullet.innerHTML = data.value;
	list.appendChild(bullet);	
	
	//list.innerHTML = bullet.data.value;
	

	console.log(data.value);
	
	if (data.value == "" ) {
		alert ("you must enter something");
		list.removeChild(bullet);
	}

}, false );

list.addEventListener('click', function (ev) {
	
	if (ev.target.className != 'done') {
		ev.target.className = "done";
		console.log("Done!");
	} else {
		ev.target.className = "notdone";
		console.log("Not Done!");		
	}
	
}, false );