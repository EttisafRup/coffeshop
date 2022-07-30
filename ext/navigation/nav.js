const ham = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const ul = document.querySelector("ul");

ham.addEventListener("click", () => {
  ham.classList.toggle("change");
  nav.classList.toggle("hide");
  ul.classList.toggle("hide");
});


// Loading CSS
const loader = document.getElementById("loader");
window.addEventListener("load", ()=>{
    loader.style.marginTop = "-200rem"
})