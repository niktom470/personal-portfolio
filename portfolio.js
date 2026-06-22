//hamburger menu
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav ul");
const menuIcon = document.querySelector(".menu-btn i");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
      if(navMenu.classList.contains("active")){
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
        menuIcon.classList.add("showButton");
    }else{
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.remove("showButton");
        menuIcon.classList.add("fa-bars");
    }
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

//send message confirmation

const form = document.getElementById("contact-form");
const sendButton = document.querySelector('.form-button');
const status = document.getElementById('status');

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(!email || !name || !message){
        status.textContent = "Please fill fields.";
            
            setTimeout(() => {
                status.textContent = "";
            }, 3000);

    return;
    }
     status.textContent = "Sending...";
     sendButton.disabled = true;
      console.log(name, email, message);
      console.log("Before emailjs");
    emailjs.send(
        "service_w37x0jw",
        "template_ot2197a",
        {
            from_name: name,
            from_email: email,
            message: message
        }
        
    ).then(() => {
           console.log("Email sent");
            status.textContent = "Message sent successfully!";
            form.reset();
            sendButton.disabled = false;

        }).catch(() => {
            console.log(error);
            status.textContent = "Failed to send message.";
            sendButton.disabled = false;

        });

    setTimeout(() => {
    status.textContent = "";
    }, 3000);

});