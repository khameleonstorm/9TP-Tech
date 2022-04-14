
var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
loader.style.display = "none";
})

if (location.protocol !== "https:") {
location.protocol = "https:";
}

