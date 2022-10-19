let humburgerButton = document.getElementById('humburger__menu__button');
let burgerMenu = document.querySelector('.nav__li');
let closeBurger1 = document.getElementById('x__for__burger')
let closeBurger2 = document.querySelector('main')
let closeBurger3 = document.querySelector('footer')


// humburger menu

humburgerButton.addEventListener('click',function() {
    burgerMenu.classList.add('active')
})

closeBurger1.addEventListener('click',()=> {
    burgerMenu.classList.remove('active')
})

closeBurger2.addEventListener('click',()=> {
    burgerMenu.classList.remove('active')
})

closeBurger3.addEventListener('click',()=> {
    burgerMenu.classList.remove('active')
})

// slider panda

let donateLabel = document.querySelectorAll('.mc_label')

console.log(changeLabel(donateLabel.value()))