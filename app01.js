//Variables
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const cedula = document.getElementById("cedula");
const correo = document.getElementById("correo");
const btnAgregar = document.getElementById("btn-agregar");
const contenedorDatos = document.getElementById("contenedor-datos");
const btnEliminar = document.querySelector('.eliminar');
const form = document.querySelector('.formulario');
let almacenDatos = [];
let id = 0;

//eventos
btnAgregar.addEventListener("click", agregarDatos);
contenedorDatos.addEventListener('click', eliminarDato);
nombre.addEventListener('blur', validarDato);
apellido.addEventListener('blur', validarDato);
cedula.addEventListener('blur', validarDato);
correo.addEventListener('blur', validarDato);
//Funciones

function eliminarDato(e){
    if(e.target.classList.contains('eliminar')){
      const datoId = e.target.getAttribute('data-id');
      almacenDatos = almacenDatos.filter((dato) => dato.id != datoId );
      console.log(almacenDatos)
      cargarHtml();
    }


}

function agregarDatos(e) {
  e.preventDefault();

  const datos = {
    nombre: nombre.value,
    apellido: apellido.value,
    cedula: cedula.value,
    correo: correo.value,
    id: ++id,
  };

  almacenDatos = [...almacenDatos, datos];
  console.log(almacenDatos);

  //asigna el html
  cargarHtml(datos);

}

function cargarHtml(dato) {
  LimpiarHtml();

  almacenDatos.forEach((dato) => {
    const { nombre, apellido, cedula, correo, id } = dato;
    const fila = document.createElement("tr");
    fila.innerHTML = `
            <td>${id}</td>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${cedula}</td>
            <td>${correo}</td>
            <td><p data-id='${id}' class='eliminar'>X</p></td>
        `;

    contenedorDatos.appendChild(fila);
  });

  
  
}

function LimpiarHtml() {
  while (contenedorDatos.firstChild) {
    contenedorDatos.removeChild(contenedorDatos.firstChild);
  }
}


