/*--------navigation menu----------*/
(()=>{

    const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click",showNavMenu);
    closeNavBtn.addEventListener("click",hideNavMenu);

    function showNavMenu(){
        navMenu.classList.add("open");
        bodyScrollingToggle();
    }

    function hideNavMenu(){
        navMenu.classList.remove("open");
        fadeOutEffect();
        bodyScrollingToggle();
    }
    function fadeOutEffect(){
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(() =>{
            document.querySelector(".fade-out-effect").classList.remove("active");
        },300)
    }

    // attach an event handler to document
    document.addEventListener("click", (event) =>{
        if(event.target.classList.contains('link-item')){
               if(event.target.hash !==""){
                   //prevent default anchor click behavior
                   event.preventDefault();
                   const hash = event.target.hash;
                   //deactivate existing active 'section'
                   document.querySelector(".section.active").classList.remove("hide");
                   document.querySelector(".section.active").classList.add("active");
                   //activate new 'section'
                   document.querySelector(hash).classList.add("active");
                   document.querySelector(hash).classList.remove("hide");
                   /*deactivate existing active navigation menu 'link-item'*/
                   navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
                   navMenu.querySelector(".active").classList.remove("active","inner-shadow");
                   /* if clicked 'link-item is contained withing the navigation menu*/
                   if(navMenu.classList.contains("open")){
                        //activate new navigation menu 'link-item'
                        event.target.classList.add("active","inner-shadow");
                        event.target.classList.remove("outer-shadow","hover-in-shadow");
                        //hide navigation menu
                        hideNavMenu();
                }
                else{
                    let navItems = navMenu.querySelectorAll(".link-item");
                    navItems.forEach((item) =>{
                        if(hash === item.hash){
                            //activate new navigation menu 'link-item'
                            item.classList.add("active","inner-shadow");
                            item.classList.remove("outer-shadow","hover-in-shadow");
                        }
                    })
                    fadeOutEffect();
                }
                //add hash (#) to url 
                window.location.hash = hash;

               }
            }
    })

})();

function bodyScrollingToggle(){
    document.body.classList.toggle("hidden-scrolling");
}

/* -------about section tabs-------*/

(() =>{           //function expression using arrow function
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click",(event) =>{
        /* if event target contains 'tab-item' class and not contains 'active' class */
        if(event.target.classList.contains("tab-item") &&
          !event.target.classList.contains("active")){
             const target = event.target.getAttribute("data-target");
             //deactivate existing active 'tab-item'
             tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
             //activate new 'tab-item'
             event.target.classList.add("active","outer-shadow");
             //deactivate existing active 'tab-content'
             aboutSection.querySelector(".tab-content.active").classList.remove("active");
             //activate new 'tab-content'
             aboutSection.querySelector(target).classList.add("active"); 
          }
    })
})();


/* ------------hide all sections except active----------- */

(() =>{                      
    /* immediatly involked function expressin-using arrow function */
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) =>{
        if(!section.classList.contains("active")){
            section.classList.add("hide");
        }
    })
})();

/* ---------------Scroll button---------------- */
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/*----preloader---- */
window.addEventListener("load", () =>{
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() =>{
        document.querySelector(".preloader").style.display="none";
    },900)
})
