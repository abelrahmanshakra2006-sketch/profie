function toggleAbout() {
    var aboutSection = document.getElementById("about");
    var btn = document.querySelector(".btn-hide");
    
    if (aboutSection.style.display === "none") {
        aboutSection.style.display = "block";
        btn.innerHTML = "<b>Hide About</b>";
    } else {
        aboutSection.style.display = "none";
        btn.innerHTML = "<b>Show About</b>";
    }
}

let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    
    slides[currentIndex].classList.remove('active');
    
    currentIndex += direction;
    
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    
    slides[currentIndex].classList.add('active');
}

document.addEventListener("DOMContentLoaded", function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000, 
            once: false,    
            mirror: true    
        });
    }
});