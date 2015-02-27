function modifyButtons(btnName) {
	resetButtons();
	document.getElementById(btnName).style.borderBottom = "3px solid #00BD6F"
}

function resetButtons() {
	document.getElementById('launch-link').style.border = "none"	
	document.getElementById('coverage-link').style.border = "none"	
	document.getElementById('inspectors-link').style.border = "none"	
	document.getElementById('events-link').style.border = "none"	
	document.getElementById('love-link').style.border = "none"	
}

function modifyDivs() {
	console.log("modifying");
	var launch = document.getElementById('launch');
	var w = launch.offsetWidth;
	var aspectRatio = 1024/681;
	var newHeight = w / aspectRatio;
	launch.style.height = newHeight;
	console.log(w);
	console.log(newHeight);
	var h = newHeight + "px";
	document.getElementById('launch').style.height = h;
}