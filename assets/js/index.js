import {Animal, Leon, Lobo, Oso, Serpiente, Aguila} from './clases.js';


const url = 'http://127.0.0.1:5501/animales.json';
const animalSeleccionado = document.querySelector('#animal');
const edad = document.querySelector('#edad');
const comentarios = document.querySelector('#comentarios');
const preview = document.querySelector('#preview');
const cardAnimales = document.querySelector('#cardAnimales')
const btnRegistrar = document.querySelector('#btnRegistrar');
const templateCard = document.querySelector('#templateCard');
//const btnPlay = document.querySelector('#btnPlay');

//Consulta datos API
const datosApi = async () => {
    const respuestaApi = await fetch(url);
    const {animales} = await respuestaApi.json();
    return animales;
    console.log(animales);
};

//Preview img:
animalSeleccionado.addEventListener('change', async () => {
    preview.textContent = ''

    const animales = await datosApi();
    const nombreAnimal = animales.find((animal) => animal.name == animalSeleccionado.value);
    //console.log(nombreAnimal);
    //console.log(nombreAnimal.name);
    //console.log(nombreAnimal.imagen);

     const img = document.createElement('img')
        img.src = `./assets/imgs/${nombreAnimal.imagen}`
        img.className = 'img-fluid'
        img.style.maxWidth = '120px'
        preview.appendChild(img)

    if(nombreAnimal) {
        btnRegistrar.disabled = false
    }

});


const animalesInvestigacion = [];

btnRegistrar.addEventListener('click', async () => {
    const animales = await datosApi();
    const nombreAnimal = animales.find((animal) => animal.name == animalSeleccionado.value);
    const edadAnimal = edad.value;
    let nuevoAnimal;

    if(animalSeleccionado.value === 'Leon') {
        nuevoAnimal = new Leon (
            nombreAnimal.name,
            edadAnimal,
            nombreAnimal.imagen,
            comentarios.value,
            nombreAnimal.sonido
        );
    } else if (animalSeleccionado.value === 'Lobo') {
        nuevoAnimal = new Lobo (
            nombreAnimal.name,
            edadAnimal,
            nombreAnimal.imagen,
            comentarios.value,
            nombreAnimal.sonido
        );
    } else if (animalSeleccionado.value === 'Oso') {
        nuevoAnimal = new Oso (
            nombreAnimal.name,
            edadAnimal,
            nombreAnimal.imagen,
            comentarios.value,
            nombreAnimal.sonido
        );
    } else if (animalSeleccionado.value === 'Serpiente') {
        nuevoAnimal = new Serpiente (
            nombreAnimal.name,
            edadAnimal,
            nombreAnimal.imagen,
            comentarios.value,
            nombreAnimal.sonido
        );
    } else if (animalSeleccionado.value === 'Aguila') {
        nuevoAnimal = new Aguila (
            nombreAnimal.name,
            edadAnimal,
            nombreAnimal.imagen,
            comentarios.value,
            nombreAnimal.sonido
        );
    }
   
    animalesInvestigacion.push(nuevoAnimal);
    console.log(nuevoAnimal);
    console.log(animalesInvestigacion);

    //console.log(nombreAnimal);
    //console.log(animalSeleccionado.value);
    //console.log(edadAnimal);
    //console.log(comentarios.value);
    //console.log(nombreAnimal.imagen);
    //console.log(nombreAnimal.sonido);

    pintarCard();
    comentarios.textContent = '';
});

//Pintar datos en card:
const pintarCard = () => {
    cardAnimales.innerHTML = '';
    animalesInvestigacion.forEach((animal) => {
        cardAnimales.innerHTML += `
        <article class="col-md-4 mb-2 bg-dark text-center">
            <div class="card">
                <img src="./assets/imgs/${animal.getImg}" class="card-img-top" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <button class="btn bg-secondary" data-button="${animal.getSonido}" ><i class="fas fa-volume-up fa-2x"></i></button>
            </div>
          </article>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content bg-dark text-center">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <img src="./assets/imgs/${animal.getImg}">
            </div>
            <div class="modal-footer text-center text-light">
                <h5>${animal.getEdad}</h5>
                <p>Comentarios:</p>
                <hr>
                <h5>${comentarios.value}</h5>
            </div>
            </div>
        </div>
        </div>
        `
    });
    const botones = document.querySelectorAll("[data-button]");
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            console.log(e.target.dataset.button);
        })
    })

}

/*
//opción con template card (no me funcionó)
const pintarCard = (animal) => {
    cardAnimales.textContent = ''
    const clone = templateCard.cloneNode(true)
    clone.querySelector('img').setAttribute("src", `./assets/imgs/${nombreAnimal.imagen}`)
    
    cardAnimales.appendChild(clone);
};
*/


/*
function play() {
    let rugir = new sonido('./sounds/Rugido.mp3');
    rugir.play()
}
*/

/*
//prueba sonido
btnPlay.addEventListener('canplay', function play() {
    let rugir = new sonido('http://www.sonidosmp3gratis.com/sounds/LION1');
    rugir.play()
});
*/

