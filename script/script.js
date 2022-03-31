import { ShowCard } from "../modules/showCard.js";
let contenedor = document.getElementById('container-cards');
const URL = 'http://localhost:3000/experiencias';
let form = document.getElementById('formulario');



document.addEventListener('DOMContentLoaded', async() => {

    let res = await fetch(URL);
    let data = await res.json();

    ShowCard(contenedor, data);


})


form.addEventListener('submit', async(e) => {

    e.preventDefault();
     let nombre = document.getElementById('name').value;
     let edad = document.getElementById('age').value;
     let img = document.getElementById('img').value;
     let sala = document.getElementById('room').value;
     let experiencia = document.getElementById('floatingTextarea').value;


     let info = {
         name: nombre,
         age: edad,
         image: img,
         room: sala,
         experience: experiencia
     }

     fetch(URL,{
         method: 'POST', 
         body: JSON.stringify(info),
         headers: {
             "Content-type": "application/json; charset=UTF-8"
         }
     })
     .then(() => {
         alert("informacion guardada")
     })
     .catch(() => {
         alert("error")
     })

})