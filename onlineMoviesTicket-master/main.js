//get modal element
var modal = document.getElementById('simpleModal');
//get open modal button
var modalBtn = document.getElementById('modalBtn');
//get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];



//listen for clicks
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);



//function to open modal
function openModal(){
	modal.style.display = 'block';
}

//function to close modal
function closeModal(){
	modal.style.display = 'none';
}


var count = 1;
function setColor(btn, color) {
	var property = document.getElementById(btn);
	if (count == 0) {
		property.style.backgroundColor = "#FFFFFF"
		count = 1;        
	}
	else {
		property.style.backgroundColor = "#7FFF00"
		count = 0;
	}
}
