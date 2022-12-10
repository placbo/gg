// @ts-nocheck
const buttons = document.querySelectorAll("[data-carousel-button]");

function loopSlidesForever() {
  const slides = document.querySelector("[data-slides]");
  const offset = 1;
  setInterval(function () {
    const activeSlide = slides.querySelector("[data-active");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  }, 5000);
}

loopSlidesForever();

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const offset = button.dataset.carouselButton === "next" ? 1 : -1;
//     const slides = button
//       .closest("[data-carousel]")
//       ?.querySelector("[data-slides]");
//     const activeSlide = slides.querySelector("[data-active");
//     let newIndex = [...slides.children].indexOf(activeSlide) + offset;
//     if (newIndex < 0) newIndex = slides.children.length - 1;
//     if (newIndex >= slides.children.length) newIndex = 0;
//     slides.children[newIndex].dataset.active = true;
//     delete activeSlide.dataset.active;
//   });
// });

const login = () => {
  event.preventDefault();
  const pwd = document.getElementsByName("password")[0].value;
  console.log("password is " + pwd);
  if (pwd === "start") {
    window.location.href = "carousel.html";
  } else {
    const element = document.getElementById("forgotten-password");
    element.style.display = "block";
    element.textContent = "Forgot password?";
    element.style.color = "#ba3d54";
  }
};
const showPasswordHint = () => {
  event.preventDefault();
  const element = document.getElementById("forgotten-password");
  element.textContent = "Hint: Det vanlige!";
  element.style.color = "rgb(61, 84, 186)";
  console.log("passwordfsdfsd");
};

function showMenuItems() {
  document.getElementById("floating-menu").style.display = "block";
  document.getElementById("burger").style.display = "none";
}
function hideMenuItems() {
  document.getElementById("floating-menu").style.display = "none";
  document.getElementById("burger").style.display = "block";
}
