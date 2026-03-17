function theme() {
  if (window.matchMedia("(prefers-color-scheme: dark )").match) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
}

theme();

let btn = document.querySelector(".toggle");

btn.addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
});

window
  .matchMedia("(prefers-color-scheme: dark )")
  .addEventListener("change", function () {
    theme();
  });
