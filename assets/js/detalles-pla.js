$(document).ready(function () {
    const data = JSON.parse(localStorage.getItem("planet-data"));
    console.log(data);

    let planetCard = $("<div></div>").addClass("planet-card");
        // Mostrar nombre del planeta y su id
        let name = $("<h1></h1>").text(
            data.name.toUpperCase()
        ).addClass("planet-name");

        let num = $("<p></p>").text(`#${data.id}`).addClass("ki");

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
  