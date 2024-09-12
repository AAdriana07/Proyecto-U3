function getDragonBallZ(id) {
    $.get(`https://dragonball-api.com/api/characters/${id}`, function (data) {
        
        //Esta funcion mostrara los personajes
        let dragonbzCard = $("<div></div>").addClass("dragon-card"); 
        
        // Nombre y ki del peronaje
        let name = $(`<a href="./pag-personajes.html" id="${id}"></a>`).text(
            data.name.toUpperCase() // en uso
    );
    name.addClass("personaje-name");
      let num = $("<p></p>").text(`#${data.order}`);

      let nameContainer = $("<div></div>").addClass("name-container");
      nameContainer.append(name, num);

    // Imagen de los personajes
    let img = $("<img />").attr(
        "src", data.image
    );

    let ki = $("<div></div>").addClass("ki");
    let kiData  = data.ki;
    console.log(kiData);

    //El error 
    for (let kis of kiData) {
        let kisElement = $("<p></p>").text(kis.ki.name.toUpperCase());
        kisElement.addClass(kis.ki.name);
        kis.append(kisElement);
    }

    //Agregamo el elemento card

    dragonbzCard.append(nameContainer, img, ki);
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
    for (let i = 1; i <= 44; i++) {
        getDragonBallZ(i);
    }
  });
