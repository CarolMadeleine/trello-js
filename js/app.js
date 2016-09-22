window.addEventListener("load", function(){
    var lista = document.getElementById("lista");
    var contenedorTrello = document.getElementById("contenedorTrello");
    // añadirLista();
  });

/*function añadirLista(){
	var caja = document.createElement("div");
      caja.classList.add("listaTrello");
      lista.insertBefore(caja, lista.childNodes[0]);
      var texto = document.createTextNode("Añadir una Lista ...");
      caja.appendChild(texto);
    } para poder añadir un div con texto*/

lista.addEventListener("click", function(e){

	lista.classList.add("sevaya");

	var añadir = document.createElement("form");
      añadir.classList.add("listaTrello");
      contenedorTrello.insertBefore(añadir, contenedorTrello.childNodes[0]);

  var iconoLista= document.createElement("span");
      iconoLista.classList.add("icon-cross");
      añadir.insertBefore(iconoLista, añadir.childNodes[2]);

  var botonLista = document.createElement("div");
      botonLista.classList.add("botonLista");
      añadir.insertBefore(botonLista, añadir.childNodes[1]);
      var textoBoton = document.createTextNode("Guardar");
      botonLista.appendChild(textoBoton);

  var inputLista= document.createElement("input");
      inputLista.classList.add("inputLista");
      inputLista.setAttribute("placeholder", "Añadir una lista ...");
      añadir.insertBefore(inputLista, añadir.childNodes[0]);

});
	