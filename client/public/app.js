


/********Menu*****************/
let icon = document.querySelector('#icon')
let links = document.querySelector('.links')

icon.addEventListener('click',()=>{
  icon.classList.toggle('active')
  links.classList.toggle('active')
})

//  click anyware outside  menu and toggle button
document.addEventListener("click", (e) => {
  if (e.target !== icon) {
      if (icon.classList.contains("active") && links.classList.contains("active")) {
        icon.classList.remove("active");
        links.classList.remove("active");
      }
  }
});
// Landing page Animation
function checkForVisibility() {
    let headers = document.querySelectorAll(".header");
    headers.forEach(function(header) {
      if (isElementInViewport(header)) {
        header.classList.add("headerVisible");
      } else {
        header.classList.remove("headerVisible");
      }
    });
  }
  
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  if (window.addEventListener) {
    addEventListener("DOMContentLoaded", checkForVisibility, false);
    addEventListener("load", checkForVisibility, false);
    addEventListener("scroll", checkForVisibility, false);
  }
  

const canvas = document.querySelector('.animation-scrolling');
const context = canvas.getContext('2d');
const html = document.documentElement;
const currentFrame = index => (
    `/client/src/animation/Render0001-007${index.toString().padStart(3, '0')}.jpg`
)

const frameCount = 70;
canvas.height = 2160;
canvas.width =  3840;
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
});

const preloadImages = () => {
    for (let i=1; i < frameCount; i++) {
        const img = new Image()
        img.src = currentFrame(i);
    }
};

preloadImages();

function loaderSpinner() {
  $(window).load(function() {
      var loader = $('.loader');
      var wHeight = $(window).height();
      var wWidth = $(window).width();
      var i = 0;
/*Center loader on half screen */
loader.css({
  top: wHeight / 2 - 2.5,
  left: wWidth / 2 - 200
})
    
do{
  loader.animate({
    width: i
  },10)
  i+=3;
} while(i <= 400)
if(i === 402){
  loader.animate({
    left: 0,
    width: '100%'
  })
  loader.animate({
    top: '0',
    height: '100vh'
  })
}
    
    /* This line hide loader and show content */
    setTimeout(function(){
      $('.content').fadeIn("slow");
      (loader).fadeOut("fast");
      /*Set time in milisec */
    },3500);
  });

}

loaderSpinner();
