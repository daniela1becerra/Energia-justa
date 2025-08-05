function mostrarOcultar() {
  const info = document.getElementById("infoExtra");
  const btn = event.target;
  if (info.style.display === "none") {
    info.style.display = "block";
    btn.textContent = "Ver menos";
  } else {
    info.style.display = "none";
    btn.textContent = "Ver más";
  }
}
