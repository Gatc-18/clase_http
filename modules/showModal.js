export const ShowModal = (obj, cont) => {
      const {name, age, image, room, experience, id} = obj;

      cont.innerHTML = `
      <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Experiencia en sala ${room}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div >
                    <div class="modal-body text-center">
                        <img class="w-50 rounded" src=${image} />
                        <h2>${name}, ${age}</h2>
                        <p>${experience}</p>

                    </div>
                    <div class="modal-footer">
                        <button id=${id} type="button" class="btn btn-danger delete">Borrar</button>
                    </div>
                </div>
      `
}