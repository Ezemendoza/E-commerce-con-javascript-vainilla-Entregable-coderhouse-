
    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,15}$/,
        password: /^.{4,8}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/
    }



    const formulario = document.getElementById('formulario');
    const inputs = document.querySelectorAll('#formulario input');

function validar (e){
switch (e.target.name){
case "usuario":
   validarInputs(expresiones.usuario,e.target,"usuario");
break;
case "nombre":
    validarInputs(expresiones.nombre,e.target,"nombre");
break;
case "password":
    validarInputs(expresiones.password,e.target,"password");
break;
case "password2":   validarInputs(expresiones.password,e.target,"password2");
 break;
case "correo":   validarInputs(expresiones.correo,e.target,"correo");
 break;
case "telefono":   validarInputs(expresiones.telefono,e.target,"telefono");
break;
}}

inputs.forEach((input) => {
	input.addEventListener('keyup', validar);
	input.addEventListener('blur', validar);
});

   

function validarInputs (expresion, input, opcion){
    opcion
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${opcion}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${opcion}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${opcion} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${opcion} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${opcion} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        switch (opcion){
            case "usuario":
            localStorage.setItem("usuario__registro", input.value);
            break;
            case "nombre":
            localStorage.setItem("nombre__registro", input.value);
            break;
            case "password":
            localStorage.setItem("contraseña__registro", input.value);
            break;
            case "correo":    
            localStorage.setItem("correo__registro", input.value);
             break;
            case "telefono":
            localStorage.setItem("telefono__registro", input.value);
            break;
            }
       
if(password2.value !==password.value){
    document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
    document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');

    document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
    document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
    document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
}
    
    }
    else{
     
		document.getElementById(`grupo__${opcion}`).classList.remove('formulario__grupo-correcto');
        document.getElementById(`grupo__${opcion}`).classList.add('formulario__grupo-incorrecto');

		document.querySelector(`#grupo__${opcion} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${opcion} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${opcion} .formulario__input-error`).classList.add('formulario__input-error-activo');
    
    }

}

function enviar(){    event.preventDefault()
const usuario= localStorage.getItem("usuario__registro")
const nombre= localStorage.getItem("nombre__registro")
const contraseña= localStorage.getItem("contraseña__registro")
console.log(usuario)
const correo= localStorage.getItem("correo__registro")
const telefono= localStorage.getItem("telefono__registro")

if(usuario !== "" && nombre !=="" && contraseña !=="" &&  correo !== "" && telefono !== "" && usuario !== null && nombre !==null && contraseña !==null &&  correo !== null && telefono !==null) {
    document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
    document.getElementById('#formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo')

    setTimeout(() => {redirreccionar() }, );
    
}
else {
    document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
}
}

function redirreccionar(){
    const nodo = document.querySelector('.conteo')
   
    let segundos = 5;
    
 setInterval(()=>{
      nodo.innerHTML=segundos;
     if(segundos== 0){location.href="turnos.html"}
      segundos-=1;
    }, 1000);
     

}