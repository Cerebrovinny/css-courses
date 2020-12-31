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
            //modal.style.display = 'block';
            //backdrop.style.display = 'block'
            // modal.className = 'open'; // This will actually overwrite the complete class list
            modal.classList.add('open');
            backdrop.classList.add('open');
        });
    }

backdrop.addEventListener('click', () => { 
    //mobileMenu.style.display = 'none';
    mobileMenu.classList.remove('open');
    closeModal();
});

modal.addEventListener('click', closeModal);

function closeModal(){
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    modal.classList.remove('open');
    backdrop.classList.remove('open');
}

//mobile menu
function openMobileMenu(){
    // mobileMenu.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileMenu.classList.add('open');
    backdrop.classList.add('open');
}

mobileButton.addEventListener('click', openMobileMenu);
