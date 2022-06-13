comprobante()

function comprobante(){
  
    const nombreDeUsuario= localStorage.getItem("usuario__registro")
    const NombreEnvio= localStorage.getItem("nombre__envio")
    const apellidoEnvio= localStorage.getItem("apellido__envio")
    const direccionEnvio= localStorage.getItem("direccion__envio")
    const codigoPostal= localStorage.getItem("codigoPostal__envio")
    const localidad = localStorage.getItem("localidad del Envio")
    const provincia= localStorage.getItem("Provincia del Envio")
 const total = localStorage.getItem("Resultado")
 const cuota= localStorage.getItem("Cuota")
    envioCreares= document.createElement('div')
    const enviosContenedores= document.querySelector('.descripcionTiendaOnline')


      let se= ""
     se= `<br><ul class="comprobante col-10"><li class="list-group-item d-flex justify-content-between totalCarrito">
            <span class="col-4"><br><img src="../Proyecto Final/imagenes/qr.png"><p class="camioncito"><br>Su pedido llegara en las siguientes 72 horas habiles </p></span>
            <span class="col-8 text-left comprobantes"> Hola! ${nombreDeUsuario} corrobore los datos del envio.<br> <br>
            <span class="text-left">Se le entregara el pedido realizado a ${NombreEnvio}<span class="col-8">Apellido:  ${apellidoEnvio} </span> </span> <br>
            <span>En la direccion ${direccionEnvio} y su respectivo codigo postal es ${codigoPostal}</span> 
            <span> <br>que se encuentra en la localidad de ${localidad}<span class="col-8">en la provincia de ${provincia} </span> </span> <br> <br> 
            <span> El pago fue realizado en ${cuota} cuotas de $  ${total} </span> <br> <br> 

            <span>Transportista: Correo Argentino <span class="col-8"><br>Codigo de Seguimiento: 400062305715801</span> </span> 
            <p class="text-center"> Gracias Por Su Compra </p>
        </span></li>
        <button class="btn btn-danger mt-4 ml-4" onclick="inicio()"> Volver al Inicio</button>
        <button class="btn btn-danger mt-4 ml-4" onclick="seguircomprando()"> Seguir Comprando</button></ul>
        
       `
       envioCreares.innerHTML=se
        enviosContenedores.appendChild(envioCreares)
       
}

function inicio(){
  window.location="../index.html"
}

function seguircomprando(){
  window.location="turnos.html"
}
