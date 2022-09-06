const sidebar = document.querySelector(".sidebar");
const toggler = document.querySelector(".navbar-toggler");

toggler.addEventListener("click", () => {
  sidebar.classList.add("sideabr-open");
});

