//Escuchar cuando haga submit el formulario
const submitFunction=(evento)=>{
    
    if(!validarFormulario()){
        evento.preventDefault();// que se prevenga la actualizacion de la web
    }else{
        evento.preventDefault();// que se prevenga la actualizacion de la web
        alert(
            'Los datos enviados fueron: \n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n'+
            'Apellido: ' + document.getElementById('apellido').value + '\n'+
            'Documento: ' + document.getElementById('documento').value + '\n'+
            'Email: ' + document.getElementById('email').value + '\n'+
            'Edad: ' + document.getElementById('edad').value + '\n'+
            'Actividad: ' + document.getElementById('actividad').value + '\n'+
            'Nivel de Estudio: ' + document.getElementById('nivelEstudio').value + '\n'
        )

    }

}
document.getElementById('formulario').addEventListener('submit', submitFunction)

function validarFormulario(){
    //Valida campos de Texto
    const camposTexto=document.querySelectorAll('input[type="text"]');
    let validacionCorrecta=true;

    camposTexto.forEach(campo =>{
        let errorCampo=document.getElementById('error'+campo.id.charAt(0).toUpperCase()+campo.id.slice(1)) //id del error es error mas la camel, ejemplo errorApellido
        if(campo.value.length==''){
            mostrarError(errorCampo, 'Este Campo es Requerido');
            validacionCorrecta=false;
        }else if(campo.value.length>0 && campo.value.length<3){
            mostrarError(errorCampo, 'Este Campo requiere al menos 3 Caracteres');
            validacionCorrecta=false;
        }else{
            ocultarError(errorCampo)
        }
    })

    //valida campos email
    const campoEmal=document.getElementById('email'); //un solo email
    validacionCorrecta=true;

    let errorCampo=document.getElementById('errorEmail') //un solo error de email
    const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/ // regex para validar email
    if(pattern.test(email.value)){ //Si pasa el regex
        ocultarError(errorCampo);

    }else{
        mostrarError(errorCampo, 'Imgrese mail valido');
        validacionCorrecta=false
    }

    //valida edad
    const edad= document.getElementById('edad');
    const errorEdad=document.getElementById('errorEdad');
    if(edad.value<18){
        mostrarError(errorEdad,"Debes ser mayor de 18");
        validacionCorrecta=false;
    }else{
        ocultarError(errorEdad)
    }

    //Valida Actividad
    const actividad= document.getElementById('actividad');
    const errorActividad=document.getElementById('errorActividad');

    if(actividad.value==''){
        mostrarError(errorActividad, "Por favor selecciona una actividad");
        validacionCorrecta=false
    }else{
        ocultarError(errorActividad)
    }

    // Valida nivel de estudio
    const nivelEstudio= document.getElementById('nivelEstudio');
    const errorNivelEstudio=document.getElementById('errorNivelEstudio');

    if(nivelEstudio.value==''){
        mostrarError(errorNivelEstudio, "Por favor selecciona un nivel de estudio");
        validacionCorrecta=false
    }else{
        ocultarError(errorNivelEstudio)
    }

    // Validar terminos y condiciones acceptoTerminos errorAcceptoTerminos

    const acceptoTerminos= document.getElementById('acceptoTerminos');
    const errorAcceptoTerminos=document.getElementById('errorAcceptoTerminos');

    if(!acceptoTerminos.checked){
        mostrarError(errorAcceptoTerminos, "Por favor accepsta los terminos");
        validacionCorrecta=false
    }else{
        ocultarError(errorAcceptoTerminos)
    }

    return validacionCorrecta // devuelve true si es valido y false si falla
}


const mostrarError=(elemento, mensaje)=>{
    elemento.textContent=mensaje;
    elemento.style.display='block';
}
const ocultarError=(elemento)=>{
    elemento.textContent='';
    elemento.style.display='none';
}