
/**********************/
/*Text animation */
/**********************/
const aleoVera = document.querySelector(".plante_1");
const aleoVeraImg= document.querySelector(".plante_1_img");
const plante1= document.querySelector(".plante_2");
const plante1Img= document.querySelector(".plante_2_img");

let listPlante_1=[...document.querySelectorAll(".plante_1")];
let listPlante_2=[...document.querySelectorAll(".plante_2")];

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

listPlante_1.forEach(item =>{
    let newString='';
    let itemText= item.children[0].innerText.split('');
    itemText.map(letter => (newString += letter == ' ' ? `<a class='gap'></a>`: `<a class='plante_1 underline ff-arvo fs-500 text-dark' href='/aleo-vera'>${letter}</a>`))
    item.innerHTML= newString;
    observer.observe(item);
});
listPlante_2.forEach(item =>{
    let newString='';
    let itemText= item.children[0].innerText.split('');
    itemText.map(letter => (newString += letter == ' ' ? `<a class='gap'></a>`: `<a class='plante_2 underline ff-arvo fs-500 text-dark' href='/Cactus'>${letter}</a>`))
    item.innerHTML= newString;
    observer.observe(item);
});

/*Hover Effect */
window.addEventListener("mousemove", (e)=>{
    let x=e.offsetX;
    let y= e.offsetY;

    if (e.target.classList.contains("plante_1")) {
        aleoVeraImg.style.left= `${x}px`;
        aleoVeraImg.style.top= `${y}px`;
    }
});
window.addEventListener("mousemove", (e)=>{
    let x=e.offsetX;
    let y= e.offsetY;     
    
    if (e.target.classList.contains("plante_2")) {
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
const canvas = document.querySelector('.animation-scrolling');
const context = canvas.getContext('2d');
const html = document.documentElement;
const currentFrame = index => (
    `/client/src/images/Render0001-0120_1${index.toString().padStart(3, '0')}.jpg`
)

const frameCount = 120;
canvas.height = 1080;
canvas.width =  1920;
const img= new Image();
img.src=currentFrame(0);
img.onload = function(){
    context.drawImage(img, 0, 0)
}

const updateImage = index => {
    img.src = currentFrame(index)
    context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () =>{
    const scrollTop =html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(frameCount -1, Math.floor(scrollFraction * frameCount));

    requestAnimationFrame(()=> updateImage(frameIndex))
})
const preloadImages =() => {
    for (let i=1; i < frameCount; i++) {
        const img = new Image()
        img.src = currentFrame(i);
    }
};
preloadImages