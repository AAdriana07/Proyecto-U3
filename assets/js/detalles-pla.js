$(document).ready(function () {
    /*const data = JSON.parse(localStorage.getItem("pokemon-data"));
    console.log(data);
  
    // Mi función para mostrar los pokemones
    let pokeCard = $("<div></div>").addClass("pokemon-card");
    // Nombre y numero del pokemon
    let name = $(`<h3">data.name</h3>`).text(data.name.toUpperCase());
    name.addClass("pokemon-name");
    let num = $("<p></p>").text(`#${data.order}`);
  
    let nameContainer = $("<div></div>").addClass("name-container");
    nameContainer.append(name, num);
  
    // Imagen del pokemon
    let img = $("<img />").attr(
      "src",
      data.sprites.other["official-artwork"].front_default
    );
  
    let tipos = $("<div></div>").addClass("tipos");
    let tiposData = data.types;
  
    for (let tipo of tiposData) {
      let tipoElement = $("<p></p>").text(tipo.type.name.toUpperCase());
      tipoElement.addClass(tipo.type.name);
      tipos.append(tipoElement);
    }
  
    // Agregamos los elementos a la card
    pokeCard.append(nameContainer, img, tipos);
    // Agregamos la card al contenedor
    $("#pokemon-container").append(pokeCard);*/
    const data = JSON.parse(localStorage.getItem("planet-data"));
    console.log(data);

    let planetCard = $("<div></div>").addClass("planet-card");
        // Mostrar nombre del planeta y su id
        let name = $("<h1></h1>").text(
            data.name.toUpperCase()
        ).addClass("planet-name");

        let num = $("<p></p>").text(`#${data.id}`);

        let nameContainer = $("<div></div>").addClass("name-container");
        nameContainer.append(name, num);

        //Mostrar imagen del planeta
        let img = $("<img />").attr("src", data.image);

        //Mostrar isDestroyed y deletedAt
        let isDestroyed = $(`<p>Is destroyed? ${data.isDestroyed}</p>`).addClass("isdestroyed");
        
        let infoCard = $("<div></div>").addClass("info-card");
        infoCard.append(isDestroyed);

        //Agregamos los elementos al card
        planetCard.append(nameContainer, img, infoCard);
        //Agregamos la card al contendor 
        $("#planetas-container").append(planetCard);
});
  