//var arreglo = [1,2,3,4,5,6]
//const resultadoBusqueda = arreglo.find(numero => numero === 7)

var arreglo = [
    {
        id: 1,
        tipoPersona: "Empleado",
        nombre: "Luke"
    },
    {
        id: 2,
        tipoPersona: "Proveedor",
        nombre: "Leia"
    },
    {
        id: 3,
        tipoPersona: "Empleado",
        nombre: "Han"
    },
    {
        id: 4,
        tipoPersona: "Empleado",
        nombre: "Anakin"
    },
    {
        id: 3,
        tipoPersona: "Empleado",
        nombre: "C3P0"
    }]

const resultadoBusquedaFind = arreglo.find(persona => persona.id === 3 && persona.tipoPersona === "Empleado")
const resultadoBusquedaFilter = arreglo.filter(persona => persona.id === 3 && persona.tipoPersona === "Empleado")

if(resultadoBusquedaFilter.length > 0  || resultadoBusquedaFind){
    console.log(resultadoBusquedaFind.nombre)
    console.log(resultadoBusquedaFilter.map(persona => persona.nombre))
}else{
    console.log("No se encontró ningún valor")
}

arreglo = arreglo.filter(persona => !(persona.id === 3 && persona.nombre === "C3P0"))
console.log(arreglo)

console.log(2 == "2")
console.log(2 === "2")