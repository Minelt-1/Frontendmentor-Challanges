let icon = document.getElementById("mob-nav");
let disabled = document.getElementById("display");
icon.addEventListener("click", function show() {
  disabled.style.display = "block";
  icon.style.display = "none";
  document.getElementById("close-nav").style.display = "inline-block";
}) 
document.getElementById("close-nav").addEventListener("click", function show() {
  disabled.style.display = "none";
  document.getElementById("close-nav").style.display = "none";
  icon.style.display = "block";
})