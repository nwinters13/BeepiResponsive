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