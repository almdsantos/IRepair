const evento = document.querySelector(".evento");
const nav = document.querySelector(".nav")

evento.addEventListener("click", () => nav.classList.toggle("active"));