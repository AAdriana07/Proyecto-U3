/*function getDragonBallZ(id) {
    $.get(`https://dragonball-api.com/api/characters/${id}`, function (data) {
        
        //Esta funcion mostrara los personajes
        let dragonbzCard = $("<div></div>").addClass("dragon-card"); 
        
        // Nombre y id del peronaje
        let name = $(`<a href="./pag-personajes.html" id="${id}"></a`).text(
            data.name.toUpperCase()
    );
    name.addClass("personaje-name");
      let num = $("<p></p>").text(`#${data.order}`);

      let nameContainer = $("<div></div>").addClass("name-container");
      nameContainer.append(name, num);

    // Imagen de los personajes
    let img = $("<img />").attr(
        "src", 
        data.items["image"].front_default//error
    );

    let tipos = $("<div></div>").addClass("tipos");
    let tiposData  = data.types;
    console.log(tiposData);

    for (let tipo of tiposData) {
        let tipoElement = $("<p></p>").text(tipo.type.name.toUpperCase());
        tipoElement.addClass(tipo.type.name);
        tipos.append(tipoElement);
    }

    //Agregamo el elemento card

    dragonbzCard.append(nameContainer, img, tipos);
    //Agregamos la card al contenedor
    $("#dragon-container").append(dragonbzCard);
    });
}

//EVENTO AL DARLE CLICK A LOS PERSONAJES

//Delegacion de evenetos para elementos creados dinamicamente
$(document).on("click",".personaje-name", function (e) {
    console.log(e.target.id);

    $.get(`https://dragonball-api.com/api/characters/${e.target.id}`,function (data) {
        //se guarda toda la data del personaje en el local store
        localStorage.setItem("dragonball-data", JSON.stringify(data));
    });
});

$(document).ready(function () {
    // Acá escribo mi código
    for (let i = 1; i <= 20; i++) {
        getDragonBallZ(i);
    }
  });*/

  function getDragonBallZ(id) {
    $.get(`https://dragonball-api.com/api/characters/${id}`, function (data) {
        if (!data) {
            console.error("No data found for character with ID:", id);
            return;
        }

        // Crea la tarjeta del personaje
        let dragonbzCard = $("<div></div>").addClass("dragon-card");

        // Nombre y ID del personaje
        let name = $(`<a href="./pag-personajes.html" id="${id}"></a>`).text(data.name.toUpperCase());
        name.addClass("personaje-name");
        let num = $("<p></p>").text(`#${data.id}`);

        let nameContainer = $("<div></div>").addClass("name-container");
        nameContainer.append(name, num);

        // Imagen del personaje
        let img = $("<img />").attr("src", data.image);

        // Tipos del personaje
        let tipos = $("<div></div>").addClass("tipos");
        if (data.race) {
            let tipoElement = $("<p></p>").text(data.race.toUpperCase());
            tipos.append(tipoElement);
        }

        // Agregar elementos a la tarjeta
        dragonbzCard.append(nameContainer, img, tipos);
        $("#dragon-container").append(dragonbzCard);
    }).fail(function () {
        console.error("Error fetching character with ID:", id);
    });
}
