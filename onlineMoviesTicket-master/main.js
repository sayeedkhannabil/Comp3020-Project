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

