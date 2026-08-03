/*
===========================================
DinunzioDotDev
Global JavaScript
===========================================
*/


document.addEventListener("DOMContentLoaded", () => {




/*
===========================================
MOBILE NAVIGATION
===========================================
*/


const navToggle = document.querySelector(".nav-toggle");

const nav = document.querySelector(".nav");



if (navToggle && nav) {


    navToggle.addEventListener("click", () => {


        nav.classList.toggle("active");


        navToggle.classList.toggle("open");


    });


}






/*
===========================================
CLOSE MOBILE MENU AFTER CLICK
===========================================
*/


const navLinks = document.querySelectorAll(".nav a");


navLinks.forEach(link => {


    link.addEventListener("click", () => {


        if(nav){

            nav.classList.remove("active");

        }


    });


});







/*
===========================================
ACTIVE PAGE HIGHLIGHT
===========================================
*/


const currentPage =
window.location.pathname.split("/").pop();



navLinks.forEach(link => {


    const linkPage =
    link.getAttribute("href");



    if(linkPage === currentPage){


        link.classList.add("active");


    }


});







/*
===========================================
SCROLL REVEAL ANIMATION
===========================================
*/


const revealElements =
document.querySelectorAll(
".service-card, .technology-card, .value-card, .process-card, .content-block"
);



const revealObserver =
new IntersectionObserver(
(entries, observer) => {


    entries.forEach(entry => {


        if(entry.isIntersecting){


            entry.target.classList.add("visible");


            observer.unobserve(entry.target);


        }


    });


},
{

    threshold:0.15

});





revealElements.forEach(element => {


    element.classList.add("reveal");


    revealObserver.observe(element);


});







/*
===========================================
CONTACT FORM
STATIC PLACEHOLDER
===========================================
*/


const contactForm =
document.querySelector("#contactForm");



const formMessage =
document.querySelector("#formMessage");



if(contactForm){



    contactForm.addEventListener(
    "submit",
    (event) => {


        event.preventDefault();



        formMessage.textContent =
        "Thank you for contacting DinunzioDotDev. We will review your message and get back to you soon.";



        formMessage.style.marginTop =
        "1rem";



        contactForm.reset();



    });



}







/*
===========================================
DYNAMIC FOOTER YEAR
===========================================
*/


const year =
document.querySelector(".copyright");



if(year){


    const currentYear =
    new Date().getFullYear();



    year.innerHTML =
    `© ${currentYear} DinunzioDotDev. All Rights Reserved.`;


}







/*
===========================================
SMOOTH BUTTON SCROLLING
===========================================
*/


const anchors =
document.querySelectorAll(
'a[href^="#"]'
);



anchors.forEach(anchor => {


    anchor.addEventListener(
    "click",
    function(event){


        const target =
        document.querySelector(
        this.getAttribute("href")
        );



        if(target){


            event.preventDefault();



            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});



});