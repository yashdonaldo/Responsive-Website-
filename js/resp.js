burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navwork = document.querySelector('.navwork')


burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav');
    rightnav.classList.toggle('v-class');
    navwork.classList.toggle('v-class');

})