//Guardar el estado (column active)
let activeColumn = 1

//Seleccionar las columns
const columns = document.querySelectorAll(".column")

//Escuchar clicks en columns
columns.forEach((column, index)=>{
    column.addEventListener("click",function(){
        changeColumne(index)
    })
})

//Cambiar estado de columns
function changeColumne(index) {
    columns[activeColumn].classList.remove("active")
    columns[index].classList.add("active")
    activeColumn = index
}