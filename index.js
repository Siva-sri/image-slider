const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imageContainerEl = document.querySelector(".image-container");
const imgsEl = document.querySelectorAll("img");

let currentImage = 1;
let timeout;

nextEl.addEventListener("click",()=>{
    currentImage++;
    clearTimeout(timeout);
    updateImg();
});

prevEl.addEventListener("click",()=>{
    currentImage--;
    clearTimeout(timeout);
    updateImg();
});

updateImg();

function updateImg(){
    if(currentImage > imgsEl.length){
        currentImage = 1;
    }
    else if(currentImage < 1){
        currentImage = imgsEl.length;
    }
    imageContainerEl.style.transform = `translateX(-${(currentImage - 1) * 500}px)`
    timeout = setTimeout(()=>{
        currentImage++;
        updateImg();
    },3000)
};