const placeholder = document.getElementById("placeholder");
const btn = document.getElementById("button");

btn.addEventListener("click", ()=> {
    let nombre = prompt("Ingrese su nombre: ");
    placeholder.innerHTML = `<p>Hola ${nombre}</p>`;
})