
/**********************/
/*Text animation */
/**********************/
const aleoVera = document.querySelector(".aleo-vera");
const aleoVeraImg= document.querySelector(".aleo-vera-img");
const plante1= document.querySelector(".plante_1");
const plante1Img= document.querySelector(".plante_1_img");

/*Hover Effect */
window.addEventListener("mousemove", (e)=>{
    let x=e.offsetX;
    let y= e.offsetY;

if  (e.target.classList.contains("aleo-vera")) {
    aleoVeraImg.style.left= `${x}px`;
    aleoVeraImg.style.top= `${y}px`;
        
}
if  (e.target.classList.contains("plante_1")) {
    plante1Img.style.left= `${x}px`;
    plante1Img.style.top= `${y}px`;
        
}
});
/*PLante1*/
plante1.addEventListener("mouseover", () => {
    plante1Img.style.display="block";
});
plante1.addEventListener("mouseleave", () => {
    plante1Img.style.display="";
});
/*Aleo-Vera*/
aleoVera.addEventListener("mouseover", () => {
    aleoVeraImg.style.display="block";
});
aleoVera.addEventListener("mouseleave", () => {
    aleoVeraImg.style.display="";
});

/********Menu*****************/
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility=== "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }else{
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});