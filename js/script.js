// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// Add this code to your existing script.js or create a new file and include it
const signVideo = document.getElementById('signVideo');
const signCanvas = document.getElementById('signCanvas');
const predictionText = document.getElementById('predictionText');

navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        signVideo.srcObject = stream;
        return new Promise((resolve) => {
            signVideo.onloadedmetadata = resolve;
        });
    })
    .then(() => {
        setInterval(detectSign, 1000); // Call detectSign function every second
    })
    .catch((err) => {
        console.error('Error accessing webcam:', err);
    });

function detectSign() {
    // Your sign language detection code goes here
    // Update predictionText.innerHTML based on the detected sign
}


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // sticky header
    let header = document.querySelector('header'); 
    header.classList.toggle('sticky', window.scrollY > 100);    

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


    // animation footer on scroll

}