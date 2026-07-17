function showCode() { document.getElementById('myModal').style.display = "block"; }
function toggleAbout() {
    var aboutSection = document.getElementById("about");
    var btn = document.querySelector(".btn-hide");
    
    if (aboutSection.style.display === "none") {
        aboutSection.style.display = "block";
        btn.innerHTML = "Hide About";
    } else {
        aboutSection.style.display = "none";
        btn.innerHTML = "Show About";
    }
}