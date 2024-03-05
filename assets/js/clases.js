class Animal {
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
      return this._img;
    }
    getComentarios() {
      return this._sonido;
    }
  
    setComentarios(comentarios) {
      this._comentarios = comentarios;
    }
  }
  
  class Leon extends Animal {
    constructor(rugir) {
      super(nombre, edad, img, comentarios, sonido);
      this._rugir = rugir;
    }
  }
  
  class Lobo extends Animal {
    constructor(aullar) {
      super(nombre, edad, img, comentarios, sonido);
      this._aullar = aullar;
    }
  }
  
  class Oso extends Animal {
    constructor(grunir) {
      super(nombre, edad, img, comentarios, sonido);
      this._grunir = grunir;
    }
  }
  
  class Serpiente extends Animal {
    constructor(sisear) {
      super(nombre, edad, img, comentarios, sonido);
      this._sisear = sisear;
    }
  }
  
  class Aguila extends Animal {
    constructor(chillar) {
      super(nombre, edad, img, comentarios, sonido);
      this._chillar = chillar;
    }
  }