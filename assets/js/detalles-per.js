$(document).ready(function () {
    const data = JSON.parse(localStorage.getItem("personaje-data"));

    // Mi función para mostrar los personajes
    let personajesCard = $("<div></div>").addClass("personajes-card");
    //Contenedor
    let nameContainer = $("<div></div>").addClass("name-container");
    // Nombre y ki del personaje
    let name = $("<h1>data.name</h1>").text(
        data.name.toUpperCase()).addClass("personajes-name");
    let ki = $("<p></p>").text(data.ki);
    
    nameContainer.append(name, ki);

    //Mostrar imagen 
    let img = $("<img />").attr("src", data.image);

    //Mostrar race, gender, planet
    let maxKi = $(`<p>MaxKi: ${data.maxKi}</p>`).addClass("maxki");
    let race = $("<p></p>").text(data.race.toUpperCase()).addClass("race");
    let gender = $("<p></p>").text(data.gender.toUpperCase()).addClass("gender");
    let description = $("<p></p>").text(data.description).addClass("description");
    let infoCard = $("<div></div>").addClass("info-card");
    
    // Mi función para mostrar el planet del personaje
    let planetCard = $("<div></div>").addClass("planet-card");
    //Info
    let namePlaneta = $("<p></p>").text(data.originPlanet.name.toUpperCase());
    let planetImg = $("<img />").attr("src", data.originPlanet.image);
    let isDestroyed = $("<p></p>").text(data.originPlanet.isDestroyed);
    let planetDescription = $("<p></p>").text(data.originPlanet.description);
    
    planetCard.append(namePlaneta, planetImg, isDestroyed, planetDescription);
    // Mi función para mostrar el transformaciones del personaje
    let transforCard = $("<div></div>").addClass("transfor-card");
    //Info
    for (let transformation of data.transformations) {
          
        //Informacion de las trasformaciones del personaje
        let nameTrasfor = $(`<p></p>`).text(transformation.name.toUpperCase()).addClass("name-transfor");
        let idTrasfor = $(`<p></p>`).text(`#${transformation.id}`).addClass("id-Trasfor");
        let imgTrasfor = $(`<img />`).attr("src", transformation.image).addClass("img-transfor");
        let kiTrasfor = $(`<p></p>`).text(transformation.ki).addClass("ki-trasfor");
        //Añadiendo elementos al transforCard 
        transforCard.append(nameTrasfor, idTrasfor, imgTrasfor, kiTrasfor);
    }

    //Agregamos los elementos al card
    personajesCard.append(nameContainer, img, infoCard);
    infoCard.append(maxKi, race, gender, description);
    

    //Agregamos la card al contendor 
    $("#personajes-container").append(personajesCard);
    $("#personajes-container").append(planetCard);
    $("#personajes-container").append(transforCard);

});

