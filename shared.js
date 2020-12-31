//select plan span
var backdrop = document.querySelector('.backdrop');
var selectPlanButton = document.querySelectorAll('.plan button')
var modal = document.querySelector('.modal');

//mobile menu
var mobileButton = document.querySelector('.toggle-button');
var mobileMenu = document.querySelector('.mobile-nav')

console.log(mobileButton)
console.log(mobileMenu)

    for (var i = 0; i < selectPlanButton.length; i++) {
        selectPlanButton[i].addEventListener('click', function() {
            modal.style.display = 'block';
            backdrop.style.display = 'block'
        });
    }

backdrop.addEventListener('click', () => { 
    mobileMenu.style.display = 'none';
    closeModal();
});

modal.addEventListener('click', closeModal);

function closeModal(){
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}

//mobile menu
function openMobileMenu(){
    mobileMenu.style.display = 'block';
    backdrop.style.display = 'block';
}

mobileButton.addEventListener('click', openMobileMenu);
