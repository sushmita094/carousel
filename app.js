const carousel = document.querySelector(".carousel-inner");
const prevButton = document.querySelector(".left-button");
const nextButton = document.querySelector(".right-button");
const dots = document.querySelector(".dots");

const width = 500;
let currentSlide = 1;
let noOfSlides = carousel.children.length;
createDots();
handleDisableButtons();

function createDots() {
  for (let i = 0; i < noOfSlides; i++) {
    let dot = document.createElement("button");
    dot.classList.add("dot");
    dot.addEventListener("click", () => handleDot(i + 1));
    dots.appendChild(dot);
  }

  handleActiveDot();
}

function handleTransform() {
  carousel.style.transform = `translate(-${(currentSlide - 1) * 500}px)`;
  handleDisableButtons();
}

function handleDot(num) {
  currentSlide = num;
  handleTransform();
  handleActiveDot();
}

function handleButton(direction) {
  if (direction === "left") {
    currentSlide--;
  } else {
    currentSlide++;
  }

  handleTransform();
  handleActiveDot();
}

function handleActiveDot() {
  for (let i = 0; i < dots.children.length; i++) {
    if (currentSlide === i + 1) {
      dots.children[i].classList.add("active");
    } else {
      dots.children[i].classList.remove("active");
    }
  }
}

function handleDisableButtons() {
  if (currentSlide === 1) {
    prevButton.disabled = true;
    nextButton.disabled = false;
  } else if (currentSlide === noOfSlides) {
    nextButton.disabled = true;
    prevButton.disabled = false;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
}
