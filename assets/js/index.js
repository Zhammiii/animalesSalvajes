import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases.js";
import { getAnimal } from "./api.js";


let datosAnimales = "";
let instanciaAnimal = "";
let formulario = {};
const animal = document.querySelector("#animal");
const edad = document.querySelector("#edad");
const comentarios = document.querySelector("#comentarios");
const btnRegistrar = document.querySelector("#btnRegistrar");
const preview = document.querySelector("#preview");

const limpiarTagPreview = () => {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }
};

(async () => {
  datosAnimales = await getAnimal();

  function onChangeInput(event) {
    formulario = { ...formulario, [event.target.id]: event.target.value };
  }

  animal.addEventListener("change", (event) => {
    onChangeInput(event);
    switch (formulario.animal) {
      case "Leon":
        instanciaAnimal = new Leon(
          formulario.animal,
          formulario.edad,
          "http://127.0.0.1:5500/assets/imgs/" +
            datosAnimales.animales[0].imagen,
          formulario.comentarios,
          "http://127.0.0.1:5500/assets/sounds/" +
            datosAnimales.animales[0].sonido
        );
        break;
      case "Lobo":
        instanciaAnimal = new Lobo(
          formulario.animal,
          formulario.edad,
          "http://127.0.0.1:5500/assets/imgs/" +
            datosAnimales.animales[1].imagen,
          formulario.comentarios,
          "http://127.0.0.1:5500/assets/sounds/" +
            datosAnimales.animales[1].sonido
        );
        break;
      case "Oso":
        instanciaAnimal = new Oso(
          formulario.animal,
          formulario.edad,
          "http://127.0.0.1:5500/assets/imgs/" +
            datosAnimales.animales[2].imagen,
          formulario.comentarios,
          "http://127.0.0.1:5500/assets/sounds/" +
            datosAnimales.animales[2].sonido
        );
        break;
      case "Serpiente":
        instanciaAnimal = new Serpiente(
          formulario.animal,
          formulario.edad,
          "http://127.0.0.1:5500/assets/imgs/" +
            datosAnimales.animales[3].imagen,
          formulario.comentarios,
          "http://127.0.0.1:5500/assets/sounds/" +
            datosAnimales.animales[3].sonido
        );
        break;
      case "Aguila":
        instanciaAnimal = new Aguila(
          formulario.animal,
          formulario.edad,
          "http://127.0.0.1:5500/assets/imgs/" +
            datosAnimales.animales[4].imagen,
          formulario.comentarios,
          "http://127.0.0.1:5500/assets/sounds/" +
            datosAnimales.animales[4].sonido
        );
        break;
      default:
        console.log("Tipo de animal no reconocido");
        break;
    }
    /* inserta imagen en preview */
    limpiarTagPreview()
    let imgElement = document.createElement("img");
    imgElement.setAttribute("src", instanciaAnimal.getImg());
    preview.appendChild(imgElement);

    /* fin imagen en preview */

    edad.addEventListener("change", (event) => {
      onChangeInput(event);
    });

    comentarios.addEventListener("change", (event) => {
      onChangeInput(event);
    });
  });

  /* Evento click para boton Registrar */

  btnRegistrar.addEventListener("click", () => {
    const animalSeleccionado = formulario.animal;
    const datosAnimalSeleccionado = datosAnimales.animales.find(
      (animal) => animal.name === animalSeleccionado
    );
    if (datosAnimalSeleccionado) {
      const card = document.createElement("div");
    card.classList.add(
      "card",
      "m-2",
      "p-3",
      "bg-light",
      "col-12",
      "col-md-6",
      "col-lg-4"
    );
    card.innerHTML = `
      <img src="http://127.0.0.1:5500/assets/imgs/${datosAnimalSeleccionado.imagen}" class="card-img-top" alt="${animalSeleccionado}">
      <div class="audio-container">
        <audio controls>
          <source src="http://127.0.0.1:5500/assets/sounds/${datosAnimalSeleccionado.sonido}" type="audio/mpeg">
          Tu navegador no soporta el elemento de audio.
        </audio>
      </div>
    `;
    document.getElementById("Animales").appendChild(card);
  } else {
    console.error(
      `No se encontró el animal ${animalSeleccionado} en los datos.`
    )}
  });

  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("play-sound")) {
      const audioUrl = event.target.getAttribute("data-audio");
      const audio = new Audio(audioUrl);
      audio.play();
    }
  });

})();
