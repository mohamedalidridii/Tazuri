
/**********************/
/*Text animation */
/**********************/
const aleoVera = document.querySelector(".aleo-vera");
const aleoVeraImg= document.querySelector(".aleo-vera-img");
const plante1= document.querySelector(".plante_1");
const plante1Img= document.querySelector(".plante_1_img");

let listItems=[...document.querySelectorAll(".product")];

let options={
    rootMargin:'0%',
    threshold:1.0
}

let observer= new IntersectionObserver(showItem, options);

function showItem(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            let letters = [...entry.target.querySelectorAll('a')];
            letters.forEach((letter, idx) => {
                setTimeout(()=>{
                    letter.classList.add('active');
                }, idx * 10)
            })
            entry.target.children[0].classList.add('active');
        }
    })
}

listItems.forEach(item =>{
    let newString='';
    let itemText= item.children[0].innerText.split('');
    itemText.map(letter => (newString += letter == ' ' ? `<a class='gap'></a>`: `<a class='underline ff-arvo fs-500 text-dark' href='/aleo-vera'>${letter}</a>`))
    item.innerHTML= newString;
    observer.observe(item);
})
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