// navigation bar function

function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.classList.toggle("responsive");
    } else {
        menuBtn.className = "nav-menu";
    }
}

// function myMenuFunction() {
//     const menu = document.getElementById("myNavMenu");

//     menu.classList.toggle("responsive");

//     console.log(menu.className);
// }


//  ---add shadow on navigation bar while scrolling ----

window.onscroll = function() {headerShadow()};

function headerShadow(){
    const navHeader = document.getElementById("header");

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
       navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
       navHeader.style.height = "70px";
       navHeader.style.lineHeight = "70px";
    } else{
       navHeader.style.boxShadow = "none";
       navHeader.style.height = "90px";
       navHeader.style.lineHeight = "90px";
    }
}


//------------------ typing effect --------------
var typingEffect = new Typed(".typedText",{
    strings :["Frontend Developer"],
    loop: true,
    typSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})


// --------------- Scroll reveal animation -----------------
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
})


// ---------- Home box-------------
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', {delay:100})
sr.reveal('.featured-text-info', {delay:200})
sr.reveal('.featured-text-btn', {delay:200})
sr.reveal('.social_icons', {delay:200})
sr.reveal('.featured-image', {delay:100})


// ----------- Project Box ----------
sr.reveal('.project-box', {interval: 100})


// ----------- Headings -------------
sr.reveal('.top-header', {})


// ------------ Scroll Reveal Left_Right Animation -----------

// ------ About info & Contact info --------
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 1000,
    reset: true
})

srLeft.reveal('.about-info', {delay: 100})
srLeft.reveal('.contact-info', {delay: 100})


// ----------- About skills and Form Box ----------
const srRight = ScrollReveal({
    origin: 'right',
    distance:'80px',
    duration: 1000,
    reset: true
})

srRight.reveal('.skills-box', {delay: 100})
srRight.reveal('.form-control', {delay: 100})


// ---------- change active link ----------

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
const scrollY = window.scrollY;

sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 150,
    sectionId = current.getAttribute('id');

    const navLink = document.querySelector(
        '.nav-menu a[href="#' + sectionId + '"]'
    );

    if(
        scrollY >= sectionTop && 
        scrollY <= sectionTop + sectionHeight
    ) {
        navLink.classList.add('active-link');


    } else {

        navLink.classList.remove('active-link');

    }
});
}


//when clicks on hamburgers about or any page it should automatically closed after clicking
const navLinks = document.querySelectorAll(".nav-link");
const navMenu = document.getElementById("myNavMenu");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("responsive");
    });
});

window.addEventListener('scroll', scrollActive);


const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

const currentTheme = localStorage.getItem("theme");

if(currentTheme === "dark"){
    document.body.setAttribute("data-theme","dark");
    themeIcon.classList.replace("uil-moon","uil-sun");
}

themeToggle.addEventListener("click", () => {

    const theme = document.body.getAttribute("data-theme");

    if(theme === "dark"){

        document.body.removeAttribute("data-theme");
        localStorage.setItem("theme","light");

        themeIcon.classList.replace("uil-sun","uil-moon");

    }else{

        document.body.setAttribute("data-theme","dark");
        localStorage.setItem("theme","dark");

        themeIcon.classList.replace("uil-moon","uil-sun");

    }

});

document.getElementById("year").textContent = new Date().getFullYear();