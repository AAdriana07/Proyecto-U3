$(document).ready(function () {
    const data = JSON.parse(localStorage.getItem("dragonball-data"));
    console.log(data);
  
    // Mi función para mostrar los pokemones
    let personajesCard = $("<div></div>").addClass("personajes-card");
    // Nombre y numero del pokemon
    let name = $("<h3>data.name</h3>").text(data.name.toUpperCase()).addClass("personale-name");

    let ki = $("<p></p>").text(data.ki);
    
    let nameContainer = $("<div></div>").addClass("name-container");
    nameContainer.append(name, ki);

    //Mostrar imagen 
    let img = $("<img />").attr("src", data.image);

    // ki, race, gender, originPlanet.name
    //Mostrar race, gender, planet
    let maxKi = $("<p></p>").text(data.maxKi).addClass("maxki");
    let race = $("<p></p>").text(data.race.toUpperCase()).addClass("race");
    let gender = $("<p></p>").text(data.gender.toUpperCase()).addClass("gender");
    let description = $("<p></p>").text(data.description).addClass("description");
    
    let planet = $("<p></p>").text(data.originPlanet.name.toUpperCase()).addClass("planet");
//Alexia que falta hacer? :) estaba leendo mas a fondo el documento //la api :)
// puedes clonarlo a lo que falta, porque solo esta de personajes, puedes clonarlo en otro archivo para 
//planetas, esferas y eso
// chicas :) hola puedes ayudar tambien a clonar favor okey, cómo se hace
//Craea nuevos hmtl y js y cambia de nombre de acuerdo a lo que falta por ejeplo ya esta pag-personajes.html entosce
//copio y pego esto en cada js? si crea otros html y js y copia y modifica por favorrr

//okay, pero entonces que agregaremos... planetas,trasnformaciones, esferas tambien pero lo de las esferas no esta en la api
// hay que revizar por siacaco ...si no esta ni modo 
//ya revise pero no hay es

//hay...
//tranformaciones
//planetas
//sare ??

let infoCard = $("<div></div>").addClass("info-card");
    infoCard.append(race, gender, planet);

    //Agregamos los elementos al card
    personajesCard.append(nameContainer, img, infoCard);
    //Agregamos la card al contendor 
    $("#personajes-container").append(personajesCard);

});
  