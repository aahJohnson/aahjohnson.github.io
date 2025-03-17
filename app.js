function loadPage(page) {
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("main").innerHTML = data;
    })
    .catch((error) => {
      document.querySelector("main").innerHTML =
        "<p>Det gick inte att ladda sidan.</p>";
      console.error("Fel vid hämtning:", error);
    });
}

// Standard: ladda F1 direkt när sidan öppnas
loadPage("f1.html");

// Lyssna på meny-klick
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = link.getAttribute("data-page");
    loadPage(page);
  });
});
