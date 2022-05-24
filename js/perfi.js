

actual()
function actual(){
    const usuario= document.querySelector('.formulario_editar__usuario')
    const nombre= document.querySelector('.formulario_editar__nombre')
    const correo= document.querySelector('.formulario_editar__correo')
    const telefono= document.querySelector('.formulario_editar__telefono')

   
    const usuarioRegistro= localStorage.getItem("usuario__registro")
    const nombreRegistro= localStorage.getItem("nombre__registro")
    const correoRegistro= localStorage.getItem("correo__registro")
    const telefonoRegistro= localStorage.getItem("telefono__registro")
    usuario.innerHTML=usuarioRegistro
    nombre.innerHTML=nombreRegistro
    correo.innerHTML=correoRegistro
    telefono.innerHTML=telefonoRegistro
    let usuarios= localStorage.getItem("usuario__registro")
    let contraseñas= localStorage.getItem("contraseña__registro")
if(contraseñas==null && usuarios==null  || contraseñas=="" && usuarios=="" )
{
location.href="iniciarsesion.html"
  
}}


function editar(){ event.preventDefault()
    location.href="registrarse.html"
}

function cerrarSesion(){

localStorage.setItem("total","")
localStorage.setItem("datos","")
localStorage.setItem("TotalConEnvio","")
localStorage.setItem("Cuota","")
localStorage.setItem("codigoPostal__envio","")
localStorage.setItem("Resultado","")
localStorage.setItem("apellido__envio","")
localStorage.setItem("usuario__envio","")
localStorage.setItem("nombre__envio","")
localStorage.setItem("envio","")
localStorage.setItem("telefono__registro","")
localStorage.setItem("usuario__registro","")
localStorage.setItem("correo__registro","")
localStorage.setItem("contraseña__registro","")
localStorage.setItem("Items","")
localStorage.setItem("nombre__registro","")
localStorage.setItem("direccion__envio","")
localStorage.setItem("localidad del Envio","")
localStorage.setItem("Provincia del Envio","")






const si= localStorage.getItem("total")
console.log(si)
}