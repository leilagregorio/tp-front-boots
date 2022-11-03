const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre:/^[a-zA-Z0-9À-ÿ]{4-86}$/,  // Letras y espacios, pueden llevar acentos.
    correo:/^[a-zA-Z0-9_.+-]+@\.[a-zA-Z0-9-.]+$/,
    cantidad:/^[0-9]$/ //solo numeros
}
/*const categorias = {
    entrada:200,
    estudiante:40,
    trainee:100,
    junior:170
}*/
const validarCampos = (expresion, input, campos) =>{ //nofunciona
   
    if(expresion.test(input.value)){
        document.getElementById(`form_${campos}`).classList.toggle('is-valid');
        
       /* document.getElementById(`form_${campos}`).classList.emove('is-invalid');
        document.getElementById(`form_${campos}`).classList.add('is-valid');*/
    }else{
        document.getElementById(`form_${campos}`).classList.toggle('is-invalid');
        /*document.getElementById(`form_${campos}`).classList.remove('is-valid');
        document.getElementById(`form_${campos}`).classList.add('is-invalid');*/
    }
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
            validarCampos(expresiones.cantidad, e.target, 'cantidad');
        break;

    }
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario); //evento q se ejecuta al insertar una tecla por el input

});




const categorizando = () =>{ //function arrow
    var cat = document.getElementById(form_categoria).value;
    if(cat==1){//estudiante
        var categ= categorias.entrada *0.8;
    }else{
    if (cat==2) {//trainee
        var categ = categorias.entrada *0.5;
    } else {//junior
        var categ = categorias.entrada *0.15;

    }
}
return categ;
}

const calculandoEntradas = () =>{
   var cant = document.getElementsById('form_cantidad').value; // cantidad de entradas
   var categ = categorizando(); //segun la categoria seleccionada devuelve el precio neto de la entrada
   

   let totalp = cant * categ;

return totalp;
}


formulario.addEventListener('submit', (e) =>{
e.preventDefault(); //en caso de que no este validado el evento no se ejecuta
var precio = calculandoEntradas();
document.getElementById('totalp').innerHTML = precio; 
});

formulario.addEventListener('reset', () =>{
    formulario.reset();
});