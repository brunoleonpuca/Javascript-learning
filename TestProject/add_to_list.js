let listaEquiposCargados = [];
let listaElem = document.getElementById("lista-equipos-elem")
let textbox = document.getElementById("textbox-elem");
let botonAgregar = document.getElementById("boton-agregar-elem");

botonAgregar.addEventListener("click", function() 
{
    if (listaEquiposCargados.includes(textbox.value)) 
    {
        error(textbox.value);
    }
    else if (textbox.value === "")
    {
        error(-1)
    } 
    else 
    {
        listaEquiposCargados.push(textbox.value)
        errorTeamElem.innerText = null;
        textbox.value = null;
        console.log(listaEquiposCargados)  
    }

    renderEquipos();
})

function renderEquipos() {
    let listaEquipos = ""
    for (let i = 0; i < listaEquiposCargados.length; i++) {
        listaEquipos += "<li>" + listaEquiposCargados[i] + "</li>";
    }

    listaElem.innerHTML = listaEquipos;
}