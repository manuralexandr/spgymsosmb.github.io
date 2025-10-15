// Příklad: můžeme mít funkci pro “scroll to section” při kliknutí
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("header nav a[href^='#']");
  for (const link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        targetElem.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
