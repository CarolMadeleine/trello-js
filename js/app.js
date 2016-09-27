window.addEventListener("load", function(){
    var listaTrello = document.getElementById("listaTrello");
    var lista = document.getElementById("lista");
    var añadir = document.getElementById("añadir");
    var botonLista = document.getElementById("botonLista");

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
    añadirTarjeta.classList.add("añadirTarjeta");
    listaTrello.insertBefore(añadirTarjeta, listaTrello.childNodes[1]);
    var textoTarjeta = document.createTextNode("Añadir una Tarjeta...");
    añadirTarjeta.appendChild(textoTarjeta);

  lista.classList.add("aparecer2");

});




});