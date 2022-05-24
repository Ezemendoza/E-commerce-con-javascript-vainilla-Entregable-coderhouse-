
const sesa= localStorage.getItem("listaTiempo")
const sisi = JSON.parse(sesa)
const sesar= localStorage.getItem("listaFutbol")
const sisir = JSON.parse(sesar)
const sesarr= localStorage.getItem("listaBasquet")
const sisirr = JSON.parse(sesarr)


nuevoCarrito =[]

   textos()


const fotoLista = document.querySelectorAll(".thumbnails-list li");

const fotoPrincipal = document.querySelector(".product-gallery-featured img");

fotoLista.forEach((item) => {
  item.addEventListener("mouseover",  ()=> {
    let imagen = item.children[0].src;
    fotoPrincipal.src = imagen;

  });
});

function textos(){

  let ref= document.querySelector(".ref").textContent
const sise = aver(ref)

if(sise ==undefined)
{  const siser = averr(ref)
  
if(siser==undefined){
  const siserr = averrr(ref)
if(siserr==undefined){}
else{    
  let titulo= document.querySelector(".productoTitulo")
let precio=  document.querySelector(".producto_precio")
let cuotas= document.querySelector(".producto_cuotas")
let marca= document.querySelector(".marca")
let color=  document.querySelector(".color")
let material= document.querySelector(".material")
let cuota= Number(siserr.precio/6).toFixed(2)
let stock= document.querySelector(".stock")
marca.innerHTML= siserr.marca
color.innerHTML= siserr.color
material.innerHTML=siserr.material
cuotas.innerHTML="6x" + cuota
precio.innerHTML="$" + siserr.precio
titulo.innerHTML=siserr.nombre
titulo.innerHTML=siserr.nombre

const buton= document.querySelector(`.descripcion__envio`)
buton.addEventListener("click", ()=>comprar(siserr))}}
else{
  let titulo= document.querySelector(".productoTitulo")
  let precio=  document.querySelector(".producto_precio")
  let cuotas= document.querySelector(".producto_cuotas")
  let marca= document.querySelector(".marca")
  let color=  document.querySelector(".color")
  let material= document.querySelector(".material")
  let cuota= Number(siser.precio/6).toFixed(2)
  let stock= document.querySelector(".stock")
marca.innerHTML= siser.marca
color.innerHTML= siser.color
material.innerHTML=siser.material
  cuotas.innerHTML="6x" + cuota
  precio.innerHTML="$" + siser.precio
  titulo.innerHTML=siser.nombre

  stock.innerHTML="!Quedan los ultimos " + siser.stock + "!"
  const buton= document.querySelector(`.descripcion__envio`)
  buton.addEventListener("click",()=>comprar(siser))
}}


else{
    let titulo= document.querySelector(".productoTitulo")
    let precio=  document.querySelector(".producto_precio")
    let cuotas= document.querySelector(".producto_cuotas")
    let marca= document.querySelector(".marca")
    let color=  document.querySelector(".color")
    let material= document.querySelector(".material")
    let stock= document.querySelector(".stock")
    let cuota= Number(sise.precio/6).toFixed(2)
  marca.innerHTML= sise.marca
  color.innerHTML= sise.color
  material.innerHTML=sise.material
    cuotas.innerHTML="6x" + cuota
    precio.innerHTML="$" + sise.precio
    titulo.innerHTML=sise.nombre
    console.log(sise)
    stock.innerHTML="!Quedan los ultimos " + sise.stock+ "!"

    const buton= document.querySelector(`.descripcion__envio`)
    buton.addEventListener("click", ()=> comprar(sise))
  

}}


function aver(ref){

return sisi.find(el=>el.css==ref)
}

function averr(ref){

return sisir.find(el=>el.css==ref)
}

  function averrr(ref){

    return sisirr.find(el=>el.css==ref)
    }
  


function comprar(x){
const carritoCompra=[]
  const precio= x.precio
  const titulo= x.nombre
  const cantidad = 1
const id= x.css
let viejo ={

  pprecio:precio,
  ptitulo:titulo,
  pcantidad: cantidad,
 pid:id
};   

nuevoCarrito.push(viejo)

const cantidadNueva = nuevoCarrito.map(item =>item.pcantidad).reduce((prev, curr) => prev + curr, 0);
nuevoCarrito.splice(1)

console.log("si")


if(id==1){
  const guardar1=  localStorage.setItem('guardar1', JSON.stringify(nuevoCarrito));}
else if(id==2){ const guardar2=  localStorage.setItem('guardar2', JSON.stringify(nuevoCarrito)); }
else if(id==3){ const guardar3=  localStorage.setItem('guardar3', JSON.stringify(nuevoCarrito));}
else if(id==4){ const guardar4=  localStorage.setItem('guardar4', JSON.stringify(nuevoCarrito));}
else if(id==5){ const guardar3=  localStorage.setItem('guardar5', JSON.stringify(nuevoCarrito));}
else if(id==6){ const guardar6=  localStorage.setItem('guardar6', JSON.stringify(nuevoCarrito));}
else if(id==7){ const guardar7=  localStorage.setItem('guardar7', JSON.stringify(nuevoCarrito));}
else if(id==8){ const guardar8=  localStorage.setItem('guardar8', JSON.stringify(nuevoCarrito));}
else if(id==9){ const guardar9=  localStorage.setItem('guardar9', JSON.stringify(nuevoCarrito));}
else if(id==10){ const guardar10=  localStorage.setItem('guardar10', JSON.stringify(nuevoCarrito));}
else if(id==11){ const guardar11=  localStorage.setItem('guardar11', JSON.stringify(nuevoCarrito));}
else if(id==12){ const guardar12=  localStorage.setItem('guardar12', JSON.stringify(nuevoCarrito));}
else if(id==13){ const guardar13=  localStorage.setItem('guardar13', JSON.stringify(nuevoCarrito));}
else if(id==14){ const guardar10=  localStorage.setItem('guardar14', JSON.stringify(nuevoCarrito));}
else if(id==15){ const guardar11=  localStorage.setItem('guardar15', JSON.stringify(nuevoCarrito));}
else if(id==16){ const guardar12=  localStorage.setItem('guardar16', JSON.stringify(nuevoCarrito));}
else if(id==17){ const guardar13=  localStorage.setItem('guardar17', JSON.stringify(nuevoCarrito));}
else if(id==18){ const guardar10=  localStorage.setItem('guardar18', JSON.stringify(nuevoCarrito));}
else if(id==19){ const guardar11=  localStorage.setItem('guardar19', JSON.stringify(nuevoCarrito));}
else if(id==21){ const guardar12=  localStorage.setItem('guardar21', JSON.stringify(nuevoCarrito));}
else if(id==22){ const guardar13=  localStorage.setItem('guardar22', JSON.stringify(nuevoCarrito));}
else if(id==23){ const guardar2=  localStorage.setItem('guardar23', JSON.stringify(nuevoCarrito)); }
else if(id==24){ const guardar3=  localStorage.setItem('guardar24', JSON.stringify(nuevoCarrito));}
else if(id==25){ const guardar4=  localStorage.setItem('guardar25', JSON.stringify(nuevoCarrito));}
else if(id==26){ const guardar3=  localStorage.setItem('guardar26', JSON.stringify(nuevoCarrito));}
else if(id==27){ const guardar6=  localStorage.setItem('guardar27', JSON.stringify(nuevoCarrito));}
else if(id==28){ const guardar7=  localStorage.setItem('guardar28', JSON.stringify(nuevoCarrito));}
else if(id==29){ const guardar8=  localStorage.setItem('guardar29', JSON.stringify(nuevoCarrito));}
else if(id==30){ const guardar9=  localStorage.setItem('guardar30', JSON.stringify(nuevoCarrito));}
else if(id==31){ const guardar10=  localStorage.setItem('guardar31', JSON.stringify(nuevoCarrito));}
else if(id==32){ const guardar11=  localStorage.setItem('guardar32', JSON.stringify(nuevoCarrito));}
else if(id==33){ const guardar12=  localStorage.setItem('guardar33', JSON.stringify(nuevoCarrito));}
else if(id==34){ const guardar13=  localStorage.setItem('guardar34', JSON.stringify(nuevoCarrito));}
else if(id==35){ const guardar10=  localStorage.setItem('guardar35', JSON.stringify(nuevoCarrito));}
else if(id==36){ const guardar11=  localStorage.setItem('guardar36', JSON.stringify(nuevoCarrito));}
else if(id==37){ const guardar12=  localStorage.setItem('guardar37', JSON.stringify(nuevoCarrito));}
else if(id==39){ const guardar13=  localStorage.setItem('guardar39', JSON.stringify(nuevoCarrito));}
else if(id==40){ const guardar11=  localStorage.setItem('guardar40', JSON.stringify(nuevoCarrito));}
else if(id==41){ const guardar12=  localStorage.setItem('guardar41', JSON.stringify(nuevoCarrito));}

}
