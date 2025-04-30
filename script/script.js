/*burger toggle*/
const burger = document.querySelector('.burger_menu');
const navbar = document.querySelector('.navbar');
const navList = document.querySelector('.nav_list');
const logo = document.querySelector('.logo');
const navLinks = document.querySelectorAll('.nav_link');


burger.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
    navList.classList.toggle('active');
    logo.classList.toggle('active');
    burger.classList.toggle('active');
})

navLinks.forEach(link=>{
    link.addEventListener('click', ()=>{
        navbar.classList.remove('active');
        navList.classList.remove('active');
        logo.classList.remove('active');
        burger.classList.remove('active');
    })
})

