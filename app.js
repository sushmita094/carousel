const carousel = document.querySelector(".carousel-inner");
const prevButton = document.querySelector(".left-button");
const nextButton = document.querySelector(".right-button");
const dots = document.querySelector(".dots");

const width = 500;
let currentSlide = 1;
let noOfSlides = carousel.children.length;
createDots();

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
}

function handleDot(num) {
  currentSlide = num;
  handleTransform();
}

const handleButton = (direction) => {
  if (direction === "left") {
    currentSlide--;
  } else {
    currentSlide++;
  }

  handleTransform();
};

function handleActiveDot() {
  console.log(dots.children);
}
