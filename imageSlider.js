let images = document.getElementsByTagName("img");
let imageIndex = 0;
let buttons = document.getElementsByTagName("button");
showCurrentImage();

function showCurrentImage() {
    Array.from(images).forEach((image) => {
        image.style.display = "none";
    });
    images[imageIndex].style.display = "block";
}
function previousImage() {
    imageIndex--;
    if(imageIndex < 0) {
        imageIndex = (images.length - 1);
    }
    showCurrentImage();

}
function nextImage() {
    imageIndex++;
    if(imageIndex == images.length) {
        imageIndex = 0;
    }
    showCurrentImage();
}
Array.from(buttons).forEach(button => {
    button.addEventListener("click", () => {
        button.style = "transform: translateY(-50%) scale(.9); background-color: hsla(0, 0%, 0%, 80%);";
        if(button == buttons[0]) {
            images[imageIndex].classList.remove("slideRight");
            images[imageIndex].classList.add("slideLeft");
        }
        else if(button == buttons[1]) {
            images[imageIndex].classList.remove("slideLeft");
            images[imageIndex].classList.add("slideRight");
        }
        
    });
    button.addEventListener("mouseover", () => {
        button.style = "transform: translateY(-50%) scale(1); background-color: hsla(0, 0%, 0%, 80%);";
        
    });
    button.addEventListener("mouseout", () => {
        button.style = "transform: translateY(-50%) scale(1);"
    });
});