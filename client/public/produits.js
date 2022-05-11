const scrollable = document.querySelector('.scrollable');
const stickyProductFirst = document.querySelector('.product-1');
const stickyProductSecond = document.querySelector('.product-2')
const stickyTitle = document.querySelector('.product-text')
let images = [...document.querySelectorAll('.img-prod')];
let current= 0;
let target  = 0;
const ease = 0.8;

function lerp(start, end, t){
    return start * (1 - t) + end + t;
}

function init(){
    document.body.style.height = `${scrollable.getBoundingClientRect().height}px`
}
function smoothScroll(){
    target = window.scrollY;
    current = lerp(current, target, ease);
    scrollable.style.transform = `translate3d(0, ${-current}px, 0)`;
    stickyOne();
    animateImages();
    window.requestAnimationFrame(smoothScroll);
}

function stickyOne(){
    let offset = window.innerHeight

    if(current <= (offset)){
        stickyTitle.style.transform = `translate3d(0, ${current - offset}px, 0)`
    }
    if(current > offset){
        stickyTitle.style.transform = `translate3d(0, ${offset}px/2, 0)`
    }
    if(current < offset * 2){
        stickyProductFirst.style.transform = `translate3d(0, 0, 0)`
    }
    if(current >= (offset * 2) && current <= (offset * 4)){
        stickyProductFirst.style.transform = `translate3d(0, ${current - offset * 2}px, 0)`
    }
    if(current > offset * 4){
        stickyProductFirst.style.transform = `translate3d(0, ${offset* 2}px, 0)`
    }
    if(current >= offset * 4 && current <= offset * 6){
            stickyProductSecond.style.transform = `translate3d(0, 0, 0)`
    }
    if(current >= offset * 6 && current <= offset * 8){
                stickyProductSecond.style.transform = `translate3d(0, ${(current) - (offset * 6)}px, 0)`
    }
    if(current > offset * 8){
                stickyProductSecond.style.transform = `translate3d(0, ${offset * 2}px, 0)`
            }
}

function animateImages(){
    for(let i = 0; i < images.length; i++){
        let { top } = images[i].getBoundingClientRect();
        if (i % 2 == 0){
            images[i].style.transform = `rotate(${top * 0.05}deg )`;
        }
        else{
        images[i].style.transform = `rotate(${top * 0.05 * -1}deg )`;
        }
    }
}
init();
smoothScroll();
console.log(current);