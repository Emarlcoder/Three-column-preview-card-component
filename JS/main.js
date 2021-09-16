//Guardar el estado (columna activa)
let columnaActiva = 1

//Seleccionar las columnas
const columnas = document.querySelectorAll(".columna")

//Escuchar clicks en columnas
columnas.forEach((columna, indice)=>{
    columna.addEventListener("click",function(){
        cambiarColumnas(indice)
    })
})

//Cambiar estado de columnas
function cambiarColumnas(indice) {
    columnas[columnaActiva].classList.remove("activa")
    columnas[indice].classList.add("activa")
    columnaActiva = indice
}