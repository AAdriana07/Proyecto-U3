function getPlanets(id) {
    $.get(`https://dragonball-api.com/api/planets/${id}`, function (data) {
        // Función para mostrar los personajes
        let planetCard = $("<div></div>").addClass("planet-card");
        // Mostrar nombre del planeta y su id
        let name = $(`<a href="detalles-pla.html" id="planeta-${id}"></a>`).text(
            data.name.toUpperCase()
        ).addClass("planet-name");
        let num = $("<p></p>").text(`#${data.id}`);

        let nameContainer = $("<div></div>").addClass("name-container");
        nameContainer.append(name, num);

        //Mostrar imagen del planeta
        let img = $("<img />").attr("src", data.image);

        //Mostrar isDestroyed y deletedAt
        let isDestroyed = $(`<p>Is destroyed? ${data.isDestroyed}</p>`).addClass("isdestroyed");
        
        let infoCard = $("<div></div>").addClass("info-card");
        infoCard.append(isDestroyed);

        //Agregamos los elementos al card
        planetCard.append(nameContainer, img, infoCard);
        //Agregamos la card al contendor 
        $("#planetas-container").append(planetCard);

    });
}

//Evento del clik en los nombres de los personajes
//Delegación de eventos para elementos 

$(document).on("click", ".name-container", function (e) {
    console.log(e.target.id);
    const id = e.target.id.split("-")[1];
  
    $.get(`https://dragonball-api.com/api/planets/${id}`, function (data) {
      // GUARDAMOS TODA LA DATA DEL POKEMON EN EL LOCALSTORAGE
      localStorage.setItem("planet-data", JSON.stringify(data));
      console.log(e.target.id);
    });
});

$(document).ready(function () {
    for (let i = 1; i <= 58; i++) {
        getPlanets(i);
    }
});
