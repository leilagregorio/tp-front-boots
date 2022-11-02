const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
    nombre:/^[a-zA-Z0-9\_\-]{4-86}$/,
    correo:/^[a-zA-Z0-9_.+-]+@\.[a-zA-Z0-9-.]+$/

}
const validarFormulario =()=>{
console.log('ejecutado');
}
inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario);
});

formulario.addEventListener('submit', (e) =>{
e.preventDefault(); //en caso de que no este validado el evento no se ejecuta

});