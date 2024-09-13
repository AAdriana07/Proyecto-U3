$(document).ready(function () {
    const data = JSON.parse(localStorage.getItem("dragonball-data"));
    console.log(data);
  
    // Mi función para mostrar los pokemones
    let personajesCard = $("<div></div>").addClass("personajes-card");
    // Nombre y numero del pokemon
    let name = $("<h3>data.name</h3>").text(
        data.name.toUpperCase()
    ).addClass("personale-name");

    let ki = $("<p></p>").text(data.ki);
        
        let nameContainer = $("<div></div>").addClass("name-container");
        nameContainer.append(name, ki);

        //Mostrar imagen 
        let img = $("<img />").attr("src", data.image);

        // ki, race, gender, originPlanet.name
        //Mostrar race, gender, planet
        let race = $("<p></p>").text(data.race.toUpperCase()).addClass("race");
        let gender = $("<p></p>").text(data.gender.toUpperCase()).addClass("gender");
        let planet = $("<p></p>").text(data.originPlanet.name.toUpperCase()).addClass("planet");

        let infoCard = $("<div></div>").addClass("info-card");
        infoCard.append(race, gender, planet);

        //Agregamos los elementos al card
        personajesCard.append(nameContainer, img, infoCard);
        //Agregamos la card al contendor 
        $("#personajes-container").append(personajesCard);

  });
  