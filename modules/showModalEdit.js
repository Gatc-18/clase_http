export const ShowModalEdit = (obj, cont) => {
     
    const {name, age, image, experience, id} = obj;

    cont.innerHTML = `
    <form id='formularioE'>
    <div class="form-group m-5">

        <input id="nameE" value=${name} text="text" class="form-control m-2" placeholder="nombre" required />
        <input id='ageE' value=${age} text="number" class="form-control m-2" placeholder="edad" />
        <input id="imgE" value=${image} text="number" class="form-control m-2" placeholder="imagen" />
        <select id="roomE" class="form-select m-2" aria-label="Default select example">
            <option selected>Sala</option>
            <option value="1">Tiempo</option>
            <option value="2">Música</option>
            <option value="3">Acuario</option>
            <option value="4">Dinosaurios</option>
        </select>
        <textarea  class="form-control m-2" placeholder="Cuentanos tu experiencia aquí"
            id="floatingTextareaE">${experience}</textarea>
        <button id=${id} type="submit" class="btn d-block m-auto" style="background-color:#FC0202; color: white">Editar</button>
    </div>
</form>
    `

}