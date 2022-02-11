//Variables 
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const cedula = document.getElementById('cedula');
const correo = document.getElementById('correo');
const btnAgregar = document.getElementById('btn-agregar');
const contenedorDatos = document.getElementById('contenedor-datos');
let almacenDatos = [];
let id = 0;

//eventos 

btnAgregar.addEventListener('click', agregarDatos)
//Funciones
function agregarDatos(e) {
  e.preventDefault();


  const datos = {
    nombre: nombre.value,
    apellido: apellido.value,
    cedula: cedula.value,
    correo: correo.value,
    id : ++id
  };

  almacenDatos = [...almacenDatos,datos]

  console.log(almacenDatos);

  //asigna el html
  cargarHtml(datos);

}

function cargarHtml(dato) {
    LimpiarHtml();
    almacenDatos.forEach((dato)=>{
       const {nombre,apellido,cedula,correo, id} = dato;
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${id}</td>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${cedula}</td>
            <td>${correo}</td>
        `

        contenedorDatos.appendChild(fila);
    })
}


function LimpiarHtml(){
     while(contenedorDatos.firstChild){
       contenedorDatos.removeChild(contenedorDatos.firstChild);
     }
}