$(document).ready(function () {
    const data = JSON.parse(localStorage.getItem("planet-data"));
    console.log(data);

    let planetCard = $("<div></div>").addClass("planet-card");
        // Mostrar nombre del planeta y su id
        let nameContainer = $("<div></div>").addClass("name-container");

        let name = $("<h1></h1>").text(
            data.name.toUpperCase()
        ).addClass("planet-name");

        let num = $("<p></p>").text(`#${data.id}`).addClass("ki");
        nameContainer.append(name, num);

        //Mostrar imagen del planeta
        let img = $("<img />").attr("src", data.image);

        //Contenedor de la informacion principal
        let infoCard = $("<div></div>").addClass("info-card");
        infoCard.append(isDestroyed, description);

        //Mostrar isDestroyed y deletedAt
        let isDestroyed = $(`<p>Is destroyed? ${data.isDestroyed}</p>`).addClass("isdestroyed");
        let description = $(`<p>Description: ${data.description}</p>`).addClass("description");
        
    
        let charactersContainer = $("<div></div>").addClass("characters-container");

        for (let character of data.characters) {
          
            //Informacion de los personajes del planeta
            let img = $(`<img />`).attr("src", character.image).addClass("img-char");
            let name = $(`<p></p>`).text(character.name).addClass("name-char");
            let maxKi = $(`<p></p>`).text(character.maxKi).addClass("maxKi-char");
            let race = $(`<p></p>`).text(character.race).addClass("race");
            let gender = $(`<p></p>`).text(character.gender).addClass("gender");
            let description = $(`<p></p>`).text(character.description).addClass("description");
            let affiliation = $(`<p></p>`).text(character.affiliation).addClass("affiliation");
            charactersContainer.append(name, img, maxKi, race, gender, description, affiliation);
        }

        //Agregamos los elementos al card
        planetCard.append(nameContainer, img, infoCard, charactersContainer);
        //Agregamos la card al contendor 
        $("#planetas-container").append(planetCard);
});
