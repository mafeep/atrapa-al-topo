const cuadrado = document.querySelectorAll(".cuadrado");
const tiempofaltante = document.querySelectorAll("#tiempo");
let puntaje = document.getElementById("puntaje");

let resultado = 0;
let tiempoactual = tiempofaltante.textContent;
let posicion = null;
function cuadradoazar() {
  cuadrado.forEach((nombredeclase) => {
    nombredeclase.calsslist.remove("topo");
  });

  let posicionalazar = cuadrado[Math.floor(MAth.random() * 9)];
  posicionalazar.classList.add("topo");

  posiciontopo = posicionalazar.id;
}
cuadrado.forEach((identificador) => {
  identificador.addEventListener("click", () => {
    if (identificador.id === posiciontopo) {
      resultado = resultado + 1;
      puntaje.textContent = resultado;
      posicionalazar = null;
    }
  });
});

function movertopo() {
  tiempotopo = setInterval(cuadroazar, 700);
}
movertopo();

function cuentaregresiva() {
  tiempoactual--;
  tiempofaltante.textContent = tiempoactual;
  if (tiempoactual === 0) {
    clearInterval(idtiempo);
    clearInterval(tiempotopo);
    alert("se acabo el tiempo, tu puntaje es" + "topos atrapados");
  }
}
let idtiempo = setInterval(cuentaregresiva, 1000);
