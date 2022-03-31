import { ShowCard } from "../modules/showCard.js";
import { ShowModal } from "../modules/showModal.js";
import { ShowModalEdit } from "../modules/showModalEdit.js";
let contenedor = document.getElementById('container-cards');
let contenedor_modal = document.querySelector('.modal-content');
let contenedor_edit = document.getElementById('contenedor_edit');
const URL = 'http://localhost:3000/experiencias';
let form = document.getElementById('formulario');
let formEdit;



document.addEventListener('DOMContentLoaded', async() => {
  // GET GENERAL
    let res = await fetch(URL);
    let data = await res.json();

    ShowCard(contenedor, data);
})

document.addEventListener('click', async ({target}) => {
    
    if(target.classList.contains('info') || target.classList.contains('edit') ){
        let id = target.id;

        //GET POR ID 
        let res = await fetch(`${URL}/${id}`);
        let data = await res.json();

        if(target.classList.contains('info')){
            ShowModal(data, contenedor_modal)
        } else if (target.classList.contains('edit')){
            ShowModalEdit(data, contenedor_edit )
            formEdit =  document.getElementById('formularioE');
        }

        
    }


    
})

document.addEventListener('click',({target}) => {

    if(target.classList.contains('delete')){
        let id = target.id;
// DELETE
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

     // POST (CREACION DE INFORMACION)
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

formEdit?.addEventListener('submit', async(e) => {
     alert(e.target.id)
    e.preventDefault();
     let nombre = document.getElementById('nameE').value;
     let edad = document.getElementById('ageE').value;
     let img = document.getElementById('imgE').value;
     let sala = document.getElementById('roomE').value;
     let experiencia = document.getElementById('floatingTextareaE').value;


     let info = {
         name: nombre,
         age: edad,
         image: img,
         room: sala,
         experience: experiencia
     }
// PUT (NO FUNCIONÓ, PROBABLEMENTE PORQUE EL FORMULARIO ESTABA DENTRO DE UN MODAL)
     fetch(`${URL}/${e.target.id}`,{
         method: 'PUT', 
         body: JSON.stringify(info),
         headers: {
             "Content-type": "application/json; charset=UTF-8"
         }
     })
     .then(() => {
         alert("informacion actualizada")
     })
     .catch(() => {
         alert("error")
     })

})