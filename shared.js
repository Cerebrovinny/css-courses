var backdrop = document.querySelector('.backdrop');
var selectPlanButton = document.querySelectorAll('.plan button')
var modal = document.querySelector('.modal');


    for (var i = 0; i < selectPlanButton.length; i++) {
        selectPlanButton[i].addEventListener('click', function() {
            modal.style.display = 'block';
            backdrop.style.display = 'block'
        });
    }

backdrop.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);

function closeModal(){
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}

