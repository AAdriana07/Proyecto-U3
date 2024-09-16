$(document).ready(function () {
    const data = JSON.parse(localStorage.getItem("planet-data"));
    
    // Mostrar imagen del planeta
    let planetImg = $("<img />").attr("src", data.image).addClass("planet-img");
    let conteinerImg = $("<div><div/>").addClass("conteiner-img");
    conteinerImg.append(planetImg);

    let planetCard = $("<div></div>").addClass("planet-card");

    // Mostrar nombre del planeta y su id
    let nameContainer = $("<div></div>").addClass("name-container");
    let planetName = $("<h1></h1>").text(data.name.toUpperCase()).addClass("planet-name");
    let planetId = $("<p></p>").text(`#${data.id}`).addClass("id");
    nameContainer.append(planetName, planetId);

    // Mostrar isDestroyed y description
    let isDestroyed = $(`<p>Is destroyed? ${data.isDestroyed}</p>`).addClass("is-destroyed");
    let description = $(`<p>Description: ${data.description}</p>`).addClass("description");
    
    // Contenedor de la información principal
    let infoCard = $("<div></div>").addClass("info-card");
    infoCard.append(isDestroyed, description);

    // Contenedor img y info 
    let contendorPrimero = $("<div><div/>");
    contendorPrimero.append(planetImg, planetCard);
    
    let charactersContainer = $("<div></div>").addClass("characters-container");

    for (let character of data.characters) {
        // Información de los personajes del planeta
        let charImg = $(`<img />`).attr("src", character.image).addClass("img-char");
        let charName = $(`<p></p>`).text(character.name).addClass("name-char");
        let charMaxKi = $(`<p></p>`).text(character.maxKi).addClass("maxKi-char");
        let charRace = $(`<p></p>`).text(character.race).addClass("race");
        let charGender = $(`<p></p>`).text(character.gender).addClass("gender");
        let charDescription = $(`<p></p>`).text(character.description).addClass("description");
        let charAffiliation = $(`<p></p>`).text(character.affiliation).addClass("affiliation");
        charactersContainer.append(charImg, charName, charMaxKi, charRace, charGender, charDescription, charAffiliation);
    }

    // Agregar los elementos al card
    planetCard.append(nameContainer, infoCard);
    // Agregar la card al contenedor
    $("#primer-conteiner").append(contendorPrimero);
    $("#planetas-container").append(charactersContainer);
});
