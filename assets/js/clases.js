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

