function showPane(paneName) {
	resetZ();
	var map = document.getElementById(paneName);
	map.style.zIndex = 100;
}


function resetZ() {
	var map = document.getElementById('map-canvas');
	map.style.zIndex = -2;
	var sell = document.getElementById('sell-pane');
	sell.style.zIndex = -2;
	var buy = document.getElementById('buy-pane');
	buy.style.zIndex = -2;
	var about = document.getElementById('about-pane');
	about.style.zIndex = -2;
	var promo = document.getElementById('promo-pane');
	promo.style.zIndex = -2;
	clearZips();
	clearPins();
}

function resetBtns() {
	var btns = [];
	btns[btns.length] = document.getElementById('btn-promo');
	btns[btns.length] = document.getElementById('btn-sell');
	btns[btns.length] = document.getElementById('btn-buy');
	btns[btns.length] = document.getElementById('btn-about');
	for (var i = 0; i < btns.length; i++) {
		var btn = btns[i];
		btn.style.backgroundColor = "black";
		btn.style.borderColor = "black";
		btn.style.color = "white";
	}
}

function modifyBtn(btnName) {
	var btn = document.getElementById(btnName);
	resetBtns();
	btn.style.backgroundColor = "#009BFF";
	btn.style.borderColor = "black";
	btn.style.color = "white";
}