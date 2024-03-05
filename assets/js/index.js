import { getAnimal } from "./api.js";

(async () => {
  const datosAnimal = await getAnimal();
  if (datosAnimal) {
    console.log(datosAnimal);
  } else {
    console.log("error, no se pudieron cargar los datos");
  }
})();