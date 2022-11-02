const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
    nombre:/^[a-zA-Z0-9À-ÿ]{4-86}$/,  // Letras y espacios, pueden llevar acentos.
    correo:/^[a-zA-Z0-9_.+-]+@\.[a-zA-Z0-9-.]+$/

}

const validarFormulario =(e)=>{
    switch (e.target.name){
        case "nombre":
            validarCampos(expresiones.nombre, e.target,'nombre');
        break;
        case "apellido":
            validarCampos(expresiones.nombre, e.target,'apellido');
        break;
        case "email":
            validarCampos(expresiones.correo, e.target,'email');
        break;
        case "cantidad":
        
        break;

    }

}

const validarCampos = (expresion, input, campos) =>{
    if(expresion.test(input.value)){
        document.getElementById(`${campos}`).classList.remove('is-invalid');
        document.getElementById(`${campos}`).classList.add('is-valid');
    }else{
        document.getElementById(`${campos}`).classList.remove('is-valid');
        document.getElementById(`${campos}`).classList.add('is-invalid');
    }
}
inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

});

formulario.addEventListener('submit', (e) =>{
e.preventDefault(); //en caso de que no este validado el evento no se ejecuta

});