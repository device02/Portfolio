




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



const contactform = document.getElementById("contactform");

contactform.addEventListener("submit", async function(event) {

    event.preventDefault();

    const submitbtn = document.getElementById("submitbtn");

    submitbtn.disabled = true;
    submitbtn.textContent = "Sending...";

    try {

        const response = await fetch(contactform.action, {
            method: "POST",
            body: new FormData(contactform),
            headers: {
                "Accept": "application/json"
            }
        });

        const result = await response.json();

        if (result.success) {

            alert("Message sent successfully!");
            contactform.reset();

        } else {

            alert("Message could not be sent. Please try again.");
            console.error(result);

        }

    } catch (error) {

        console.error("Form error:", error);
        alert("Network error. Please try again.");

    } finally {

        submitbtn.disabled = false;
        submitbtn.textContent = "Send Message";

    }

});


/* WEB3FORMS 


const contactform = document.getElementById("contactform");

contactform.addEventListener("submit", async function(event) {

    event.preventDefault();

    const submitbtn = document.getElementById("submitbtn");
    const formresult = document.getElementById("formresult");

    submitbtn.disabled = true;
    submitbtn.textContent = "Sending...";
    formresult.textContent = "";

    const formData = new FormData(contactform);
    const object = Object.fromEntries(formData);
    
    try {

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(object)
        });

        const result = await response.json();

        if (response.ok && result.success) {

            formresult.textContent = "Message sent successfully!";
            contactform.reset();

        } else {

            formresult.textContent = result.message || "Message could not be sent.";

            console.error("Web3Forms Error:", result);

        }

    } catch (error) {

        formresult.textContent = "Something went wrong. Please try again.";
        console.error("Error:", error);

    } finally {

        submitbtn.disabled = false;
        submitbtn.textContent = "Send Message";

    }

});

/* EMAILJS 
emailjs.init({
    publicKey: "dWdF0_2S_7x6KVuFK"
});
const contactform = document.getElementById("contactform");
contactform.addEventListener("submit", function(event) {
    event.preventDefault();

    const submitbtn = document.getElementById("submitbtn");
       submitbtn.disabled = true;
    submitbtn.textContent = "Sending...";

    emailjs.sendForm(
        "17115",
        "template_qo12k88",
        contactform

    ).then(() => {
        alert("Message sent successfully!");
        contactform.reset();
    }).catch((error) => {
        console.error("Error:", error);
        alert("Failed to send message.");
    }).finally(() => {
        submitbtn.disabled = false;
        submitbtn.textContent = "Send Message";
    });
});/*
    ).then(() => {
        console.log("Email sent successfully");
        alert("Message sent successfully!");
        contactform.reset();
    }).catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message: " + error.text);
    }).finally(() => {
        submitbtn.disabled = false;
        submitbtn.textContent = "Send Message";
    });
}); */


let headingedit;

document.getElementById("upload").onclick = function(){
headingedit = document.getElementById("h2").value;
document.getElementById("heading").textContent= headingedit
}

