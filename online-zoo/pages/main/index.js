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

// slider pets


let firstArrow = document.querySelector('.first__arrow')
let secondArrow = document.querySelector('.second__arrow')
let firLine = document.querySelector('.firs__line')
let secondLine = document.querySelector('.second__line')
let leftCount
let count = 0 ;


firstArrow.addEventListener("click",() => {
    firLine.style.transform = "translate(-34vw,0vw)";
    secondLine.style.transform = "translate(-34vw,0vw)";
   count++
   if (count === 2) {
    count = 0
   
   firLine.style.transform = "translate(0vw,0vw)";
    secondLine.style.transform = "translate(0vw,0vw)";
   }
})

secondArrow.addEventListener("click",() => {
    firLine.style.transform = "translate(0vw,0vw)";
    secondLine.style.transform = "translate(0vw,0vw)";
    count++
    if (count === 2) {
     count = 0
    
    firLine.style.transform = "translate(-34vw,0vw)";
     secondLine.style.transform = "translate(-34vw,0vw)";
    }
    })
