export class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this.nombre = nombre;
        this.edad = edad;
        this.img = img;
        this.comentarios = comentarios;
        this.sonido = sonido;
    }

    get getNombre(){
        return this.nombre;
    }
    get getEdad(){
        return this.edad;
    }
    get getImg(){
        return this.img;
    }
    get getSonido(){
        return this.sonido;
    }
    set setComentario(comentario){
        this.comentario = comentario;
    }
};

//export(Animal)

export class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }
    
    sonidoLeon() {
        let rugir = this.getSonido
    }
};

export class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }
    
    sonidoLobo() {
        let aullar = this.getSonido
    }
};

export class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }
    
    sonidoOso() {
        let grunir = this.getSonido
    }
};

export class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }
    
    sonidoSerpiente() {
        let sisear = this.getSonido
    }
};

export class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }
    
    sonidoAguila() {
        let chillar = this.getSonido
    }
};