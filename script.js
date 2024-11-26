import { paris, tokio, newYork, roma } from './city.js';


// Obtener elementos del DOM
let listaDeCiudades = document.querySelectorAll('li')
let title = document.getElementById('title')
let subTitle = document.getElementById('subtitle')
let paragraph = document.getElementById('paragraph')

// Agregar evento click a cada enlace

listaDeCiudades.forEach(function (ciudad) {
    ciudad.addEventListener('click', function () {

        // Remover la clase active de todos los enlaces
        listaDeCiudades.forEach(function (ciudad) {
            ciudad.classList.remove('active');
        });

        // add active 
        this.classList.add('active');

        // bring information
        let descripcionDeCiudades = mostrarCiudades(this.textContent)

        // show content
        title.innerHTML = descripcionDeCiudades.title
        subTitle.innerHTML = descripcionDeCiudades.subtitle
        paragraph.innerHTML = descripcionDeCiudades.paragraph
    });


});

// Function para traer información correcta de cada ciudad.

function mostrarCiudades(ciudad) {
    let descripcionDeCiudades = {
        'Paris': paris,
        'Tokio': tokio,
        'NewYork': newYork,
        'Roma': roma,
    };
    return descripcionDeCiudades[ciudad];
}