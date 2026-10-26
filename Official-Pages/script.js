// this is going to make the photo blow up and fade when you scroll//

let hero = document.querySelector(".fade-photo");

if (hero) {
  window.addEventListener("scroll", function () {
    let amount = window.scrollY / 500;
    hero.style.opacity = 1 - amount;
    hero.style.transform = "scale(" + (1 + amount) + ")";
  });
}