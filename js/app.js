window.addEventListener("load", function(){
    var listaTrello = document.getElementById("listaTrello");
    var lista = document.getElementById("lista");
    var añadir = document.getElementById("añadir");
    var botonLista = document.getElementById("botonLista");
    var añadirTarjeta = document.getElementById("añadirTarjeta");

    lista.addEventListener("click", function(){
        lista.classList.add("sevaya");
        añadir.classList.add("aparecer");

});

  botonLista.addEventListener("click", function(e){

    e.preventDefault();
    añadir.classList.add("form2");

    var mensajeTrello = document.createElement("div")
    mensajeTrello.classList.add("mensajeTrello");
    mensajeTrello.innerText = inputLista.value;
    listaTrello.insertBefore(mensajeTrello, listaTrello.childNodes[0]);

    var añadirTarjeta= document.createElement("a");
    añadirTarjeta.setAttribute("id", "añadirTarjeta");
    añadirTarjeta.classList.add("añadirTarjeta");
    listaTrello.insertBefore(añadirTarjeta, listaTrello.childNodes[1]);
    var textoTarjeta = document.createTextNode("Añadir una Tarjeta...");
    añadirTarjeta.appendChild(textoTarjeta);

    lista.classList.add("aparecer2");

    añadirTarjeta.addEventListener("click", function(e){

    e.preventDefault();
    añadirTarjeta.classList.add("tarjeDesaparecer");

    var boxArea= document.createElement("form");
        boxArea.classList.add("boxArea");
        listaTrello.insertBefore(boxArea, listaTrello.childNodes[1]);

    var iconoLista= document.createElement("span");
        iconoLista.classList.add("icon-cross");
        boxArea.insertBefore(iconoLista, boxArea.childNodes[2]);

    var botonLista = document.createElement("button");
        botonLista.classList.add("botonLista");
        boxArea.insertBefore(botonLista, boxArea.childNodes[1]);
        var textoBoton = document.createTextNode("Añadir");
        botonLista.appendChild(textoBoton);

    var textArea= document.createElement("textarea");
        textArea.classList.add("textArea");
        boxArea.insertBefore(textArea, boxArea.childNodes[0]);


});


});


});