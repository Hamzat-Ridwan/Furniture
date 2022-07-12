let menuBtn = document.querySelector('#menu-bar')
let menuPage = document.querySelector('.menu-container')
let menuClose = document.querySelector('#menu-close')
let contactBtn = document.querySelector('.contact')
menuBtn.addEventListener('click', ()=>{
    menuPage.classList.add('active')
    
})

menuClose.addEventListener('click', ()=>{
    menuPage.classList.remove('active')
    
})

contactBtn.addEventListener('click', ()=>{
    menuPage.classList.remove('active')
    
})