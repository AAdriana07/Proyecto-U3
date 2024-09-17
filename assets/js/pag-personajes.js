function getDragonBall(id) {
    $.get(`https://dragonball-api.com/api/characters/${id}`, function (data) {
        // Función para mostrar los personajes
        let personajesCard = $("<div></div>").addClass("personajes-card");
        // Mostrar nombre y el ki del personaje
        let name = $(`<a href="detalles-per.html" id="personaje-${id}"></a>`).text(
            data.name.toUpperCase()
        ).addClass("personajes-name");
        let ki = $("<p></p>").text(data.ki);
        
        let nameContainer = $("<div></div>").addClass("name-container");
        nameContainer.append(name, ki);

        //Mostrar imagen 
        let img = $("<img />").attr("src", data.image).addClass("img-card");
        let conteinerImg = $("<div></div>").addClass("container-img");
        conteinerImg.append(img);

        let infoCard = $("<div></div>").addClass("info-card");

        // ki, race, gender, originPlanet.name
        //Mostrar race, gender, planet
        let race = $("<p></p>").text(data.race.toUpperCase()).addClass("race-info");
        let gender = $("<p></p>").text(data.gender.toUpperCase()).addClass("gender-info");
        let planet = $("<p></p>").text(data.originPlanet.name.toUpperCase()).addClass("planet-info");

        infoCard.append(race, gender, planet);

        //Agregamos los elementos al card
        personajesCard.append(nameContainer, conteinerImg, infoCard);
        //Agregamos la card al contendor 
        $("#personajes-container").append(personajesCard);

    });
}

//Evento del clik en los nombres de los personajes
//Delegación de eventos para elementos 

$(document).on("click", ".name-container", function (e) {
    console.log(e.target.id);
    const id = e.target.id.split("-")[1];
  
    $.get(`https://dragonball-api.com/api/characters/${id}`, function (data) {
      // GUARDAMOS TODA LA DATA DEL POKEMON EN EL LOCALSTORAGE
      localStorage.setItem("personaje-data", JSON.stringify(data));
      console.log(e.target.id);
    });
});

$(document).ready(function () {
    for (let i = 1; i <= 58; i++) {
        getDragonBall(i);
    }
});
