export const ShowCard = (cont, arr) => {


    arr.forEach(element => {

        const { image, name, id} = element;
         cont.innerHTML += `
         <div class="card text-center d-inline-block m-2" style="width: 15rem;">
         <img src="${image}" class="card-img-top w-50 d-block m-auto" alt="">
         <div class="card-body">
           <h5 class="card-title">${name}</h5>
           <a data-bs-toggle="modal" data-bs-target="#exampleModal" href="#" id=${id} class="btn info" style="background-color:#FC0202; color: white">ver más</a>
           <a data-bs-toggle="modal" data-bs-target="#deleteModal" href="#" id=${id} class="btn edit" style="background-color:#FC0202; color: white">editar</a>
         </div>
       </div>
         `
    });
}