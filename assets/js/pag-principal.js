/*function getDragonBall(id) {
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
}

//Evento del clik en los nombres de los personajes
//Delegación de eventos para elementos 

$(document).on("click", ".name-container", function (e) {
    console.log(e.target.id);
    const id = e.target.id.split("")[1];
  
    $.get(`https://dragonball-api.com/api/characters/${e.target.id}`, function (data) {
      // GUARDAMOS TODA LA DATA DEL POKEMON EN EL LOCALSTORAGE
      localStorage.setItem("dragonball-data", JSON.stringify(data));
      console.log(e.target.id);
    });
});

$(document).ready(function () {
    for (let i = 1; i <= 4; i++) {
        getDragonBall(i);
    }
});

*/
