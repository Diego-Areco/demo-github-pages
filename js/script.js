console.log("Mi sitio web está funcionando!");

document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector("footer p");
  const fecha = new Date().getFullYear();
  footer.textContent = footer.textContent.replace("2026", fecha);
});
