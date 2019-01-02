function dismissNote() {
	window.close();
}
var elClose = document.getElementById('return');
elClose.addEventListener('click', dismissNote, false);

function XdismissNote() {
	window.close();
}

var elClose = document.getElementById('closetab');
elClose.addEventListener('click', XdismissNote, false);