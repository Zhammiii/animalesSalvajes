export class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      this._nombre = nombre;
      this._edad = edad;
      this._img = img;
      this._comentarios = comentarios;
      this._sonido = sonido;
    }
    getNombre() {
      return this._nombre;
    }
    getEdad() {
      return this._edad;
    }
    getImg() {
      return this._img
    }

    getComentarios() {
      return this._comentarios;
    }
  
    setComentarios(comentarios) {
      this._comentarios = comentarios;
    }
  }
  
  export class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido);
    }
    Rugir() {
    }
}

  export class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido);
    }
    Aullar(){}
  }
  
  export class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido);
    }
   Grunir(){}
  }
  
  export class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido);
    }
    Sisear(){}
  }
  
  export class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido);
    }
    Chillar(){}
  }
