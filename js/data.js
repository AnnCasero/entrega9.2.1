const dato = localStorage.getItem('datoGuardado');
const campo = document.getElementById('data');
window.addEventListener('load', () => {
    campo.innerHTML = dato;
});