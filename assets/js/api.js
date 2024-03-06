const URL_BASE = "http://127.0.0.1:5500/animales.json";

export const getAnimal = async (url = URL_BASE) => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
