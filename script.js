const pages = Array.from(document.querySelectorAll(".card"));
const startButton = document.querySelector("#start-btn");
const yesButton = document.querySelector("#yes-btn");
const noButton = document.querySelector("#no-btn");

let yesScale = 1;

const showPage = (id) => {
  pages.forEach((page) => page.classList.remove("is-active"));
  const active = document.querySelector(id);
  if (active) {
    active.classList.add("is-active");
  }
};

startButton?.addEventListener("click", () => {
  showPage("#page-2");
});

yesButton?.addEventListener("click", () => {
  showPage("#page-3");
});

noButton?.addEventListener("click", () => {
  yesScale += 0.15;
  yesButton.style.transform = `scale(${yesScale})`;
  yesButton.style.boxShadow = "0 16px 30px rgba(255, 91, 189, 0.5)";
});
