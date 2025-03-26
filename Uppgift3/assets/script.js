// script.js
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  const contentDiv = document.getElementById("content");

  // Add for each link
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const target = event.target.dataset.target;
      // If home, reload page
      if (target === "home") {
        window.location.reload();
      } else {
        // Else fetch target content
        fetch(target)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Nätverksfel");
            }
            return response.text();
          })
          .then((data) => {
            contentDiv.innerHTML = data;
          })
          .catch((error) => {
            // Error
            contentDiv.innerHTML = `<p>Något gick fel: ${error.message}</p>`;
          });
      }
    });
  });
});
