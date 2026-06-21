const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
// document.querySelectorAll('a[href^="#"]').forEach(link => {
//     link.addEventListener("click", function(e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute("href"))
//             .scrollIntoView({
//                 behavior: "smooth"
//             });
//     });
// });


//Active Navigation Highlights

const section = document.querySelectorAll('section');
const navLinks = document.querySelectorAll("nav ul li a");
window.onscroll = ()=>{section.forEach(section=>{
    let top = window.scrollY;
    let offset = section.offsetTop-150;
    let height = section.offsetHeight;
    let id =  section.getAttribute('id');
    if(top>= offset && top<offset + height){
        navLinks.forEach(links=>{
            links.classList.remove('active');
            document.querySelector('nav ul li a[href*='+ id +']').
            classList.add('active');
        });
    };
});

};

//scroll animation

const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
          if(entry.isIntersecting){
            entry.target.classList.add('show');
          }else{
            entry.target.classList.remove('show');
          }
      });
},{});
const webElements = document.querySelectorAll(".ani");
webElements.forEach(el=>observer.observe(el)); 