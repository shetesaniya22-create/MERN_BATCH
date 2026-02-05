document.addEventListener('DOMContentLoaded',()=>{


const box = document.querySelector(".box");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

box.addEventListener("touchstart", (event) => {
    isDragging = true;
    const touch = event.touches[0];
    offsetX = touch.clientX - box.offsetLeft;
    offsetY = touch.clientY - box.offsetTop;
}, { passive: false });

document.addEventListener("touchmove", (event) => {
    if (isDragging) {
        event.preventDefault();
        const touch = event.touches[0];
        box.style.left = (touch.clientX - offsetX) + "px";
        box.style.top = (touch.clientY - offsetY) + "px";
    }
}, { passive: false });

document.addEventListener("touchend", () => {
    isDragging = false;
});
})
