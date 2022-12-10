// @ts-nocheck
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      ?.querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

const login = () => {
  event.preventDefault();
  const pwd = document.getElementsByName("password")[0].value;
  console.log("password is " + pwd);
  if (pwd === "start") {
    document.getElementById("mainContent").style.display = "flex";
    document.getElementById("loginpage").style.display = "none";
  }
};
const showPasswordHint = () => {
  event.preventDefault();
  document.getElementById("forgotten-password").textContent =
    "Hint: Det vanlige!";
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
