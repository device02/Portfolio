const hamburger = document.getElementById("hamburger");
const topnav = document.getElementById("topnav");
const topnavlink = document.querySelectorAll("#topnav a");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    topnav.classList.toggle("show");
});


topnavlink.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        topnav.classList.remove("show");
    });
});



const services = document.querySelectorAll(".scrolls");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
        else {
            return;
        }

    });

}, {
    threshold: 0.2
});

services.forEach(service => {
    observer.observe(service);
});




let headingedit;

document.getElementById("upload").onclick = function(){
headingedit = document.getElementById("h2").value;
document.getElementById("heading").textContent= headingedit
}