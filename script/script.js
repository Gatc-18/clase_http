import { ShowCard } from "../modules/showCard.js";
import { ShowModal } from "../modules/showModal.js";
import { ShowModalEdit } from "../modules/showModalEdit.js";
let contenedor = document.getElementById('container-cards');
let contenedor_modal = document.querySelector('.modal-content');
let contenedor_edit = document.getElementById('contenedor_edit');
const URL = 'http://localhost:3000/experiencias';
let form = document.getElementById('formulario');



document.addEventListener('DOMContentLoaded', async() => {

    let res = await fetch(URL);
    let data = await res.json();

    ShowCard(contenedor, data);
})

document.addEventListener('click', async ({target}) => {
    
    if(target.classList.contains('info') || target.classList.contains('edit') ){
        let id = target.id;

        let res = await fetch(`${URL}/${id}`);
        let data = await res.json();

        if(target.classList.contains('info')){
            ShowModal(data, contenedor_modal)
        } else if (target.classList.contains('edit')){
            ShowModalEdit(data, contenedor_edit )
        }

        
    }


    
})

document.addEventListener('click',({target}) => {

    if(target.classList.contains('delete')){
        let id = target.id;

        fetch(`${URL}/${id}`, {
            method: 'DELETE', 
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(() => {
            alert("usuario eliminado")
        })
        .catch(() => {
            alert("error")
        })


    }
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