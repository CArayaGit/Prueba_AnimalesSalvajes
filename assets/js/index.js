import {Animal} from './clases.js';


const url = 'http://127.0.0.1:5501/animales.json';
const animalSeleccionado = document.querySelector('#animal');
const edad = document.querySelector('#edad');
const comentarios = document.querySelector('#comentarios');
const preview = document.querySelector('#preview');
const animales = document.querySelector('#Animales')
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
    console.log(nombreAnimal);
    console.log(nombreAnimal.imagen);

     const img = document.createElement('img')
        img.src = `./assets/imgs/${nombreAnimal.imagen}`
        img.className = 'img-fluid'
        img.style.maxWidth = '120px'
        preview.appendChild(img)

});


//Consulta imagenes
btnRegistrar.addEventListener('click', async () => {
    const animales = await datosApi();
    const nombreAnimal = animales.find((animal) => animal.name == animalSeleccionado.value);
    const edadAnimal = edad.value;
    console.log(nombreAnimal);
    console.log(edadAnimal);
    console.log(comentarios.value);
    console.log(nombreAnimal.imagen);

    const pintarPreview = (posts) => {
        posts.forEach((item) => {
            const clone = templateCard.cloneNode(true);
            clone.querySelector('img').textContent = `${nombreAnimal.image}`;
            clone.querySelector('p').textContent = item.body;
            fragment.appenChild(clone);
        });
        
    };
    animales.appenChild(fragment)

});




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

