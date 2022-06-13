carritoPagos()

  

function carritoPagos(){
  envio()
validacion()
const local= localStorage.getItem("local")
const local_ = JSON.parse(local)

creacionCarrito= document.createElement('ul')
const contenedorCarrito= document.querySelector('.carritoPago');
  const subtotal= localStorage.getItem("total")

  let suma= 0
local_.forEach((element) => {
console.log(element)
  let carritoCompras= ""
  carritoCompras = `<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between lh-sm text-dark">
    <div>
      <h6 class="my-0">${element.ptitulo}</h6>
      <small class="text-muted text-dark"> x ${element.pcantidad}</small>
    </div>
    <span class="text-dark">$ ${element.pprecio}</span>
  </li>
  <div class="finCa"></div>
</ul>`
creacionCarrito.innerHTML+=carritoCompras
contenedorCarrito.appendChild(creacionCarrito);
const ok = element.pprecio*element.pcantidad
suma += ok
})
localStorage.setItem("total", suma)
creacionTotal= document.createElement('div')
const contenedorTotal= document.querySelectorAll('.finCa')
contenedorTotal.forEach(element =>{
 
  let total= ""
  total= `<ul><li class="list-group-item d-flex justify-content-between totalCarrito">
   <span class="text-dark">Subtotal</span>
   <span class="text-dark"> $ ${suma}</span></li></ul>`
  
  creacionTotal.innerHTML=total
  element.appendChild(creacionTotal)
     
})

 }


function envio(){
const envio = document.querySelector('.localidad')
let suma =0
envio.addEventListener("click", ()=>{
  suma++;



if(suma==2){
  const envioPrecio= 540
  const localStorageEnvio= localStorage.setItem("envio", envioPrecio) 
  creacionTotal= document.createElement('div')
  const contenedorTotal= document.querySelectorAll('.finCa')
contenedorTotal.forEach(element =>{
    let total= ""
    total= `<ul class="oki"><li class="list-group-item d-flex justify-content-between totalCarrito">
     <span><img src="../Proyecto Final/imagenes/camion.png"><p class="camioncito">Su pedido llegara en las siguientes 72 horas habiles </p></span>
     <strong class="text-dark">$ ${envioPrecio} </strong></li></ul>  `

   creacionTotal.innerHTML=total
element.appendChild(creacionTotal)})
 

envioCrear= document.createElement('div')

  const enviosContenedor= document.querySelector('.oki')

  
   
    let se= ""
   se= `<ul class=totalFinal><li class="list-group-item d-flex justify-content-between"> <span class="text-dark">Codigo de descuento:
    <input type="text" class="form-control tarjetaAtrasScript mr-2 " id="cc-cvv" placeholder=""  required><span class="text-primary sinCodigo" onclick="sinCodigo()">No tengo codigo</span></span>
    
    <input type="submit" class="item-button btn btn-danger enviarBoton mb-3 mt-3" value= "enviar"  formmethod="get" formnovalidate>
    </li></ul>`

    envioCrear.innerHTML=se
    enviosContenedor.appendChild(envioCrear)
   enviadoCodigo()

 }})}


function enviadoCodigo(){

  const descuentos = document.querySelector('.enviarBoton')
  let suma= 0
descuentos.addEventListener("click",()=>{
  const descuento = document.querySelector('.tarjetaAtrasScript').value

  if(descuento== "somosriver"){
    suma++
    if(suma==1){
      Toastify({
        text: "Descuento confirmado",
        duration: 2000,
        gravity:"bottom",
        style:{
            background: "#009905",
        }}).showToast();
  
    const total = Number(localStorage.getItem("total"))
    const envios = Number(localStorage.getItem("envio"))
  const precioFinal= total+envios
  
  
  const precioFinalConDescuento=precioFinal- precioFinal*25/100
  const precioFinalConDescuentoLocal= localStorage.setItem("TotalDescuento",precioFinalConDescuento)
  cuotasConDescuento()
  
    envioCreares= document.createElement('div')
    const enviosContenedores= document.querySelector('.totalFinal')
   
  
      let se= ""
     se= `<ul><li class="list-group-item d-flex justify-content-between totalCarrito text-dark">
     <span>Total</span>
     <span> $ ${precioFinalConDescuento}</span></li></ul>`
  
      envioCreares.innerHTML=se
      enviosContenedores.appendChild(envioCreares)
      suma++
      cuotasDescuento
      }
      else {Toastify({
        text: "Codigo ya utilizado",
        duration: 2000,
        gravity:"bottom",
        style:{
            background: "red",
        }}).showToast();}
      
  }

else {Toastify({
  text: "Codigo incorrecto",
  duration: 2000,
  gravity:"bottom",
  style:{
      background: "red",
  }}).showToast();}

}

)}


function sinCodigo(){
  const envio = document.querySelector('.sinCodigo')
  let suma =0
  envio.addEventListener("click", ()=>{
    suma++;
  
  console.log(suma)
  
  if(suma==1){
  envioCreares= document.createElement('div')
  const enviosContenedores= document.querySelector('.totalFinal')
  const precioEnvio = Number(localStorage.getItem("envio"))
  const total =Number(localStorage.getItem("total"))
  const final = total+precioEnvio
const finalLocal= localStorage.setItem("TotalConEnvio", final)
    let se= ""
   se= `<ul><li class="list-group-item d-flex justify-content-between totalCarrito">
   <span>Total</span>
   <span> $ ${final}</span></li></ul>`

    envioCreares.innerHTML=se
    enviosContenedores.appendChild(envioCreares)
    cuotasSinDescuento()
  }})}




function cuotasSinDescuento(){
  const opcion1= document.querySelector(`.opcion1`)
  const cuota1= localStorage.getItem("TotalConEnvio")
const cuota= cuota1/3
  let si =""
  si= `1 cuota de $ ${cuota1}`
  opcion1.innerHTML=si


const opcion2= document.querySelector(`.opcion2`)
let op2 =""
op2=`3 cuotas sin interes de $ ${cuota}`
opcion2.innerHTML=op2

siSinDescuento()

}

function cuotasConDescuento(){
  const opcion1= document.querySelector(`.opcion1`)
  const cuota1= localStorage.getItem("TotalDescuento")
const cuota= cuota1/3
  let si =""
  si= `1 cuota de $ ${cuota1}`
  opcion1.innerHTML=si


const opcion2= document.querySelector(`.opcion2`)
let op2 =""
op2=`3 cuotas sin interes de $ ${cuota}`
opcion2.innerHTML=op2

siConDescuento()
}
  
   
function siConDescuento(){
  const seleccion= document.querySelector(`.cuotas`)
  seleccion.addEventListener("click",()=>{
    const seleccione= document.querySelector(`.cuotas`).value
    
    if(seleccione==2){
      const valor = localStorage.getItem("TotalDescuento")
      const cuotas= 3
      const resultado= valor/3
      const subida = localStorage.setItem("Resultado",resultado)
      const cuota = localStorage.setItem("Cuota",cuotas)
  
    }
    else{
      const valor = localStorage.getItem("TotalDescuento")
      const cuotas= 1
      const resultado= valor/1
      const subida = localStorage.setItem("Resultado",resultado)
      const cuota = localStorage.setItem("Cuota",cuotas)

    }
  })
    }

function siSinDescuento(){
  const seleccion= document.querySelector(`.cuotas`)
  seleccion.addEventListener("click",()=>{
    const seleccione= document.querySelector(`.cuotas`).value
    
    if(seleccione==2){
      const valor = localStorage.getItem("TotalConEnvio")
      const cuotas= 3
      const resultado= valor/3
      const subida = localStorage.setItem("Resultado",resultado)
      const cuota = localStorage.setItem("Cuota",cuotas)

    }
    else{
      const valor = localStorage.getItem("TotalConEnvio")
      const cuotas= 1
      const resultado= valor/1
      const subida = localStorage.setItem("Resultado",resultado)
      const cuota = localStorage.setItem("Cuota",cuotas)

    }
  })
  
}

function validacion(){

  const provinciaEnvio = document.querySelector(`.provincia`).value
  const localidadEnvio = document.querySelector(`.localidad`).value

const expresiones = {

  nombre: /^[a-zA-ZÀ-ÿ\s]{2,15}$/,
  apellido: /^[a-zA-ZÀ-ÿ\s]{3,15}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  direccion:/^[a-zA-ZÀ-ÿ\s]+\d{2,15}$/,
  telefono: /^\d{7,14}$/,
  numeroTarjeta: /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
  codigoPostal:/^\d{4}$/,
  nombreTarjeta:/^[a-zA-ZÀ-ÿ\s]{2,15}$/,
  expiracion:/^[a-zA-Z0-9-]+\/[a-zA-Z0-9-.]+$/,
  cvv:/^\d{3}$/,
}

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('.formulario__input');

function validar (e){
  
switch (e.target.name){

case "nombre":
validarInputs(expresiones.nombre,e.target,"nombre");
break;
case "apellido":
validarInputs(expresiones.apellido,e.target,"apellido");
break;
case "direccion":   validarInputs(expresiones.direccion,e.target,"direccion");
break;
case "codigoPostal":   validarInputs(expresiones.codigoPostal,e.target,"codigoPostal");
break;
case "correo":   validarInputs(expresiones.correo,e.target,"correo");
break;
case "nombreTarjeta":   validarInputs(expresiones.nombreTarjeta,e.target,"nombreTarjeta");
break;
case "numeroTarjeta":   validarInputs(expresiones.numeroTarjeta,e.target,"numeroTarjeta");
break;
case "expiracion":   validarInputs(expresiones.expiracion,e.target,"expiracion");
break;
case "cvv":   validarInputs(expresiones.cvv,e.target,"cvv");
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
      
        case "nombre":
        localStorage.setItem("nombre__envio", input.value);
        break;
        case "apellido":
        localStorage.setItem("apellido__envio", input.value);
        break;
        case "correo":    
        localStorage.setItem("correo__registro", input.value);
         break;
         case "direccion":    
        localStorage.setItem("direccion__envio", input.value);
         break;
        case "codigoPostal":
        localStorage.setItem("codigoPostal__envio", input.value);
        break;
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
  
  if(provinciaEnvio.length<1){
    Toastify({
      text: "Coloque correctamente su provincia por favor",
      duration: 2000,
      gravity:"bottom",
      style:{
          background: "red",
      }}).showToast();
    return false}
  else{
    const provinciaEnvioLocal= localStorage.setItem("Provincia del Envio", provinciaEnvio)
  }
  if(localidadEnvio.length<1){
    Toastify({
      text: "Coloque correctamente su localidad por favor",
      duration: 2000,
      gravity:"bottom",
      style:{
          background: "red",
      }}).showToast();
    return false}
  else{
    const localidadEnvioLocal= localStorage.setItem("localidad del Envio", localidadEnvio)
  }
  
  
    window.location="comprobante.html"
event.preventDefault()
      }

  
