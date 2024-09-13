$(document).ready(function () {
    const data = JSON.parse(localStorage.getItem("personaje-data"));

    // Mi función para mostrar los pokemones
    let personajesCard = $("<div></div>").addClass("personajes-card");
    // Nombre y numero del pokemon
    let name = $("<h1>data.name</h1>").text(
        data.name.toUpperCase()).addClass("personajes-name");

    let ki = $("<p></p>").text(data.ki);
    
    let nameContainer = $("<div></div>").addClass("name-container");
    nameContainer.append(name, ki);

    //Mostrar imagen 
    let img = $("<img />").attr("src", data.image);

    // ki, race, gender, originPlanet.name
    //Mostrar race, gender, planet
    let maxKi = $(`<p>MaxKi: ${data.maxKi}</p>`).addClass("maxki");
    let race = $("<p></p>").text(data.race.toUpperCase()).addClass("race");
    let gender = $("<p></p>").text(data.gender.toUpperCase()).addClass("gender");
    let description = $("<p></p>").text(data.description).addClass("description");
    let infoCard = $("<div></div>").addClass("info-card");
    infoCard.append(maxKi, race, gender, description);

    //Contenedor planeta
    let planetContainer = $("<div></div>").addClass("planet-container");
    let namePlaneta = $("<p></p>").text(data.originPlanet);
    console.log(namePlaneta);
    let planetImg = $("<img />").attr("src", data.originPlanet.image);
    let isDestroyed = $("<p></p>").text(data.originPlanet.isDestroyed);
    let planetDescription = $("<p></p>").text(data.originPlanet.description);
    planetContainer.append(namePlaneta, planetImg, isDestroyed, planetDescription);
    console.log(planetContainer);
    
    let planet = $("<p></p>").text(data.originPlanet.name.toUpperCase()).addClass("planet");



    //Agregamos los elementos al card
    personajesCard.append(nameContainer, img, infoCard);
    //Agregamos la card al contendor 
    $("#personajes-container").append(personajesCard);

});

