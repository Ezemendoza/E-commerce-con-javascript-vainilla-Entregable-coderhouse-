const boton= document.querySelector(".btn").addEventListener("click",()=>{vercarrito()})
const imagen__carrito=document.querySelector(".dropdown-toggle").addEventListener("click",()=>{vercarrito()})



vercarrito()
function vercarrito(){

    carritoFinal = []
    const guardar1= localStorage.getItem("guardar1")
    const guardar1_ = JSON.parse(guardar1)
    const guardar2= localStorage.getItem("guardar2")
    const guardar2_ = JSON.parse(guardar2)
    const guardar3= localStorage.getItem("guardar3")
    const guardar3_ = JSON.parse(guardar3)
    const guardar4= localStorage.getItem("guardar4")
    const guardar4_ = JSON.parse(guardar4)
    const guardar5= localStorage.getItem("guardar5")
    const guardar5_ = JSON.parse(guardar5)
    const guardar6= localStorage.getItem("guardar6")
    const guardar6_ = JSON.parse(guardar6)
    const guardar7= localStorage.getItem("guardar7")
    const guardar7_ = JSON.parse(guardar7)
    const guardar8= localStorage.getItem("guardar8")
    const guardar8_ = JSON.parse(guardar8)
    const guardar9= localStorage.getItem("guardar9")
    const guardar9_ = JSON.parse(guardar9)
    const guardar10= localStorage.getItem("guardar10")
    const guardar10_ = JSON.parse(guardar10)
    const guardar11= localStorage.getItem("guardar11")
    const guardar11_ = JSON.parse(guardar11)
    const guardar12= localStorage.getItem("guardar12")
    const guardar12_ = JSON.parse(guardar12)
    const guardar13= localStorage.getItem("guardar13")
    const guardar13_ = JSON.parse(guardar13)
    const guardar14= localStorage.getItem("guardar14")
    const guardar14_ = JSON.parse(guardar14)
    const guardar15= localStorage.getItem("guardar15")
    const guardar15_ = JSON.parse(guardar15)
    const guardar16= localStorage.getItem("guardar16")
    const guardar16_ = JSON.parse(guardar16)
    const guardar17= localStorage.getItem("guardar17")
    const guardar17_ = JSON.parse(guardar17)
    const guardar18= localStorage.getItem("guardar18")
    const guardar18_ = JSON.parse(guardar18)
    const guardar19 = localStorage.getItem("guardar19")
    const guardar19_= JSON.parse(guardar19)
    const guardar21 =localStorage.getItem("guardar21")
    const guardar21_= JSON.parse(guardar21)
    const guardar22 = localStorage.getItem("guardar21")
    const guardar22_ = JSON.parse(guardar22)
    const guardar23= localStorage.getItem("guardar23")
    const guardar23_ = JSON.parse(guardar23)
    const guardar24= localStorage.getItem("guardar24")
    const guardar24_ = JSON.parse(guardar24)
    const guardar25= localStorage.getItem("guardar25")
    const guardar25_ = JSON.parse(guardar25)
    const guardar26= localStorage.getItem("guardar26")
    const guardar26_ = JSON.parse(guardar26)
    const guardar27= localStorage.getItem("guardar27")
    const guardar27_ = JSON.parse(guardar27)
    const guardar28= localStorage.getItem("guardar28")
    const guardar28_ = JSON.parse(guardar28)
    const guardar29= localStorage.getItem("guardar29")
    const guardar29_ = JSON.parse(guardar29)
    const guardar30= localStorage.getItem("guardar30")
    const guardar30_ = JSON.parse(guardar30)
    const guardar31= localStorage.getItem("guardar31")
    const guardar31_ = JSON.parse(guardar31)
    const guardar32= localStorage.getItem("guardar32")
    const guardar32_ = JSON.parse(guardar32)
    const guardar33= localStorage.getItem("guardar33")
    const guardar33_ = JSON.parse(guardar33)
    const guardar34= localStorage.getItem("guardar34")
    const guardar34_ = JSON.parse(guardar34)
    const guardar35= localStorage.getItem("guardar35")
    const guardar35_ = JSON.parse(guardar35)
    const guardar36= localStorage.getItem("guardar36")
    const guardar36_ = JSON.parse(guardar36)
    const guardar37= localStorage.getItem("guardar37")
    const guardar37_ = JSON.parse(guardar37)
    const guardar39= localStorage.getItem("guardar39")
    const guardar39_ = JSON.parse(guardar39)
    const guardar40= localStorage.getItem("guardar40")
    const guardar40_ = JSON.parse(guardar40)
    const guardar41= localStorage.getItem("guardar41")
    const guardar41_ = JSON.parse(guardar41)


if(guardar1_!=null||undefined){
  array1=guardar1_.find(el=>el.pcantidad)
  carritoFinal.push(array1)
}if(guardar2_!=null||undefined){
  array2=guardar2_.find(el=>el.pcantidad)
  carritoFinal.push(array2)
}
if(guardar3_!=null||undefined){
  array3=guardar3_.find(el=>el.pcantidad)
  carritoFinal.push(array3)
}
if(guardar4_!=null||undefined){
  array4=guardar4_.find(el=>el.pcantidad)
  carritoFinal.push(array4)
}
if(guardar5_!=null||undefined){
  array5=guardar5_.find(el=>el.pcantidad)
  carritoFinal.push(array5)
}
if(guardar6_!=null||undefined){
  array6=guardar6_.find(el=>el.pcantidad)
  carritoFinal.push(array6)
}if(guardar7_!=null||undefined){
  array7=guardar7_.find(el=>el.pcantidad)
  carritoFinal.push(array7)
}if(guardar8_!=null||undefined){
  array8=guardar8_.find(el=>el.pcantidad)
  carritoFinal.push(array8)
}
if(guardar9_!=null||undefined){
  array9=guardar9_.find(el=>el.pcantidad)
  carritoFinal.push(array9)
}
if(guardar10_!=null||undefined){
  array10=guardar10_.find(el=>el.pcantidad)
  carritoFinal.push(array10)
}
if(guardar11_!=null||undefined){
  array11=guardar11_.find(el=>el.pcantidad)
  carritoFinal.push(array11)
}
if(guardar12_!=null||undefined){
  array12=guardar12_.find(el=>el.pcantidad)
  carritoFinal.push(array12)
}
if(guardar13_!=null||undefined){
  array13=guardar13_.find(el=>el.pcantidad)
  carritoFinal.push(array13)
}
if(guardar14_!=null||undefined){
  array14=guardar14_.find(el=>el.pcantidad)
  carritoFinal.push(array14)
}
if(guardar15_!=null||undefined){
  array15=guardar15_.find(el=>el.pcantidad)
  carritoFinal.push(array15)
}
if(guardar16_!=null||undefined){
  array16=guardar16_.find(el=>el.pcantidad)
  carritoFinal.push(array16)
}
if(guardar17_!=null||undefined){
  array17=guardar17_.find(el=>el.pcantidad)
  carritoFinal.push(array17)
}
if(guardar18_!=null||undefined){
  array18=guardar18_.find(el=>el.pcantidad)
  carritoFinal.push(array18)
}
if(guardar19_!=null||undefined){
  array19=guardar19_.find(el=>el.pcantidad)
  carritoFinal.push(array19)
}
if(guardar21_!=null||undefined){
  array21=guardar21_.find(el=>el.pcantidad)
  carritoFinal.push(array21)
}
if(guardar22_!=null||undefined){
  array22=guardar22_.find(el=>el.pcantidad)
  carritoFinal.push(array22)
}
if(guardar23_!=null||undefined){
  array23=guardar23_.find(el=>el.pcantidad)
  carritoFinal.push(array23)
}if(guardar24_!=null||undefined){
  array24=guardar24_.find(el=>el.pcantidad)
  carritoFinal.push(array24)
}
if(guardar25_!=null||undefined){
  array25=guardar25_.find(el=>el.pcantidad)
  carritoFinal.push(array25)
}
if(guardar26_!=null||undefined){
  array26=guardar26_.find(el=>el.pcantidad)
  carritoFinal.push(array26)
}
if(guardar27_!=null||undefined){
  array27=guardar27_.find(el=>el.pcantidad)
  carritoFinal.push(array27)
}
if(guardar28_!=null||undefined){
  array28=guardar28_.find(el=>el.pcantidad)
  carritoFinal.push(array28)
}if(guardar29_!=null||undefined){
  array29=guardar29_.find(el=>el.pcantidad)
  carritoFinal.push(array29)
}if(guardar30_!=null||undefined){
  array30=guardar30_.find(el=>el.pcantidad)
  carritoFinal.push(array30)
}
if(guardar31_!=null||undefined){
  array31=guardar31_.find(el=>el.pcantidad)
  carritoFinal.push(array31)
}
if(guardar32_!=null||undefined){
  array32=guardar32_.find(el=>el.pcantidad)
  carritoFinal.push(array32)
}
if(guardar33_!=null||undefined){
  array33=guardar33_.find(el=>el.pcantidad)
  carritoFinal.push(array33)
}
if(guardar34_!=null||undefined){
  array34=guardar34_.find(el=>el.pcantidad)
  carritoFinal.push(array34)
}
if(guardar35_!=null||undefined){
  array35=guardar35_.find(el=>el.pcantidad)
  carritoFinal.push(array35)
}
if(guardar36_!=null||undefined){
  array36=guardar36_.find(el=>el.pcantidad)
  carritoFinal.push(array36)
}
if(guardar37_!=null||undefined){
  array37=guardar37_.find(el=>el.pcantidad)
  carritoFinal.push(array37)
}
if(guardar39_!=null||undefined){
  array39=guardar39_.find(el=>el.pcantidad)
  carritoFinal.push(array39)
}
if(guardar40_!=null||undefined){
  array40=guardar40_.find(el=>el.pcantidad)
  carritoFinal.push(array40)
}
if(guardar41_!=null||undefined){
  array41=guardar41_.find(el=>el.pcantidad)
  carritoFinal.push(array41)
}
      carritoFinal.forEach((el)=>{
        
const fa= document.querySelectorAll(".titulo")
for(let i=0 ; i<fa.length;i++){
  if(fa[i].innerHTML==el.ptitulo){
      const cantidad = fa[i].parentNode.parentNode.parentNode.querySelector('.cantidad__carrito')
  ;
  return
}
}

      
        let cadena = ""
      const carrito= document.querySelector(".modal-body")
        cadena=`
        <div class="row columnas">
          <div class="col-4">
               <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                   <img src="../imagenes/camiseta${el.pid}.png" class="shopping-cart-image">
                   <h6 class=" text-truncate ml-3 mb-0 titulo">${el.ptitulo}</h6>
                   </div>
           </div>
        
           <div class="col-3 ml-3 item-price">
               <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                   <p class=" tp-4 shoppingCartItemPrice"> $ ${el.pprecio}</p> </div>
           </div>
               <div class="col-2 editCarrito ml-4">
               <button class="btn sumas__carrito restas">-</button>
               <span class="cantidad__carrito">${el.pcantidad}</span>
               <button class="btn sumas__carrito sumas" >+</button>    </div>
               <div class="col-1 col__vacia ">
                   <img src="../imagenes/basura.png" class="imagenCarrito">
                 </div>
             
           </div> `
           
             carrito.innerHTML+=cadena
       

             carritos(carritoFinal)
        
         })  
         compre(carritoFinal)
  }
  function resultado(){
    const totalCompra= document.querySelector(".cart-total")
    const local= localStorage.getItem("local")
    const local_ = JSON.parse(local)
const ver =local_.map(item =>item.pcantidad * item.pprecio).reduce((prev, curr) => prev + curr, 0);

totalCompra.innerHTML=ver
  }

  function carritos(e){

  
    const boton__sumar = document.querySelectorAll(".sumas")
    const boton__restar = document.querySelectorAll(".restas")
  const imagen__carrito= document.querySelectorAll(".col__vacia")
  const columna__carrito= document.querySelector(".row")

const comprar = document.querySelector(".descripcion__envio")
boton__sumar.forEach((el=>{
  carritoCompra=[]
 el.addEventListener("click", (e)=>{
    const busqueda= e.target.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[3].textContent
    const cantidad = document.querySelectorAll(".cantidad__carrito")

    const tituloNuevo = carritoFinal.find(item =>item.ptitulo==busqueda)
  
   if(busqueda==tituloNuevo.ptitulo){


carritoFinal.forEach((el)=>{
if(busqueda==el.ptitulo)
{
  cantidad.forEach((e)=>{
  const ok = e.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[3].textContent
  if(busqueda==ok){
    
    nuevaCantidad=el.pcantidad+1
    el.pcantidad=nuevaCantidad
    se = el.pcantidad
el.pcantidad=se
e.innerHTML=nuevaCantidad

const id= el.pid
const precio= el.pprecio
const titulo=el.ptitulo
const cantidadd=el.pcantidad
let viejo ={

pprecio:precio,
ptitulo:titulo,
pcantidad: cantidadd,
pid:id
};   carritoCompra.push(viejo)
const arr=[viejo]

const local=  localStorage.setItem('local', JSON.stringify(carritoFinal));
resultado()
if(id==1){
  const guardar1=  localStorage.setItem('guardar1', JSON.stringify(arr));
}
else if(id==2){ const guardar2=  localStorage.setItem('guardar2', JSON.stringify(arr)); }
else if(id==3){ const guardar3=  localStorage.setItem('guardar3', JSON.stringify(arr));}
else if(id==4){ const guardar4=  localStorage.setItem('guardar4', JSON.stringify(arr));}
else if(id==5){ const guardar3=  localStorage.setItem('guardar5', JSON.stringify(arr));}
else if(id==6){ const guardar6=  localStorage.setItem('guardar6', JSON.stringify(arr));}
else if(id==7){ const guardar7=  localStorage.setItem('guardar7', JSON.stringify(arr));}
else if(id==8){ const guardar8=  localStorage.setItem('guardar8', JSON.stringify(arr));}
else if(id==9){ const guardar9=  localStorage.setItem('guardar9', JSON.stringify(arr));}
else if(id==10){ const guardar10=  localStorage.setItem('guardar10', JSON.stringify(arr));}
else if(id==11){ const guardar11=  localStorage.setItem('guardar11', JSON.stringify(arr));}
else if(id==12){ const guardar12=  localStorage.setItem('guardar12', JSON.stringify(arr));}
else if(id==13){ const guardar13=  localStorage.setItem('guardar13', JSON.stringify(arr));}
else if(id==14){ const guardar10=  localStorage.setItem('guardar14', JSON.stringify(arr));}
else if(id==15){ const guardar11=  localStorage.setItem('guardar15', JSON.stringify(arr));}
else if(id==16){ const guardar12=  localStorage.setItem('guardar16', JSON.stringify(arr));}
else if(id==17){ const guardar13=  localStorage.setItem('guardar17', JSON.stringify(arr));}
else if(id==18){ const guardar10=  localStorage.setItem('guardar18', JSON.stringify(arr));}
else if(id==19){ const guardar11=  localStorage.setItem('guardar19', JSON.stringify(arr));}
else if(id==21){ const guardar12=  localStorage.setItem('guardar21', JSON.stringify(arr));}
else if(id==22){ const guardar13=  localStorage.setItem('guardar22', JSON.stringify(arr));}
else if(id==23){ const guardar2=  localStorage.setItem('guardar23', JSON.stringify(arr)); }
else if(id==24){ const guardar3=  localStorage.setItem('guardar24', JSON.stringify(arr));}
else if(id==25){ const guardar4=  localStorage.setItem('guardar25', JSON.stringify(arr));}
else if(id==26){ const guardar3=  localStorage.setItem('guardar26', JSON.stringify(arr));}
else if(id==27){ const guardar6=  localStorage.setItem('guardar27', JSON.stringify(arr));}
else if(id==28){ const guardar7=  localStorage.setItem('guardar28', JSON.stringify(arr));}
else if(id==29){ const guardar8=  localStorage.setItem('guardar29', JSON.stringify(arr));}
else if(id==30){ const guardar9=  localStorage.setItem('guardar30', JSON.stringify(arr));}
else if(id==31){ const guardar10=  localStorage.setItem('guardar31', JSON.stringify(arr));}
else if(id==32){ const guardar11=  localStorage.setItem('guardar32', JSON.stringify(arr));}
else if(id==33){ const guardar12=  localStorage.setItem('guardar33', JSON.stringify(arr));}
else if(id==34){ const guardar13=  localStorage.setItem('guardar34', JSON.stringify(arr));}
else if(id==35){ const guardar10=  localStorage.setItem('guardar35', JSON.stringify(arr));}
else if(id==36){ const guardar11=  localStorage.setItem('guardar36', JSON.stringify(arr));}
else if(id==37){ const guardar12=  localStorage.setItem('guardar37', JSON.stringify(arr));}
else if(id==39){ const guardar13=  localStorage.setItem('guardar39', JSON.stringify(arr));}
else if(id==40){ const guardar10=  localStorage.setItem('guardar40', JSON.stringify(arr));}
else if(id==41){ const guardar11=  localStorage.setItem('guardar41', JSON.stringify(arr));}

  } })}})}})}))
  
boton__restar.forEach((el=>{
  carritoCompra=[]
  el.addEventListener("click", (e)=>{
     const busqueda= e.target.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[3].textContent
     const cantidad = document.querySelectorAll(".cantidad__carrito")
 
     const tituloNuevo = carritoFinal.find(item =>item.ptitulo==busqueda)
   
    if(busqueda==tituloNuevo.ptitulo){
 
 
 carritoFinal.forEach((el)=>{
   
 if(busqueda==el.ptitulo)
 {
   cantidad.forEach((e)=>{
   const ok = e.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[3].textContent
   if(busqueda==ok){
     
     nuevaCantidad=el.pcantidad-1
     el.pcantidad=nuevaCantidad
     se = el.pcantidad

 e.innerHTML=nuevaCantidad
  const id= el.pid
  const precio= el.pprecio
  const titulo=el.ptitulo
  const cantidadd=se

  let viejo ={
  pprecio:precio,
  ptitulo:titulo,
  pcantidad: cantidadd,
 pid:id
};  

 carritoCompra.push(viejo)

const arr=[viejo]



const local=  localStorage.setItem('local', JSON.stringify(carritoFinal));
resultado()
if(id==1){
  const guardar1=  localStorage.setItem('guardar1', JSON.stringify(arr));
}
else if(id==2){ const guardar2=  localStorage.setItem('guardar2', JSON.stringify(arr)); }
else if(id==3){ const guardar3=  localStorage.setItem('guardar3', JSON.stringify(arr));}
else if(id==4){ const guardar4=  localStorage.setItem('guardar4', JSON.stringify(arr));}
else if(id==5){ const guardar3=  localStorage.setItem('guardar5', JSON.stringify(arr));}
else if(id==6){ const guardar6=  localStorage.setItem('guardar6', JSON.stringify(arr));}
else if(id==7){ const guardar7=  localStorage.setItem('guardar7', JSON.stringify(arr));}
else if(id==8){ const guardar8=  localStorage.setItem('guardar8', JSON.stringify(arr));}
else if(id==9){ const guardar9=  localStorage.setItem('guardar9', JSON.stringify(arr));}
else if(id==10){ const guardar10=  localStorage.setItem('guardar10', JSON.stringify(arr));}
else if(id==11){ const guardar11=  localStorage.setItem('guardar11', JSON.stringify(arr));}
else if(id==12){ const guardar12=  localStorage.setItem('guardar12', JSON.stringify(arr));}
else if(id==13){ const guardar13=  localStorage.setItem('guardar13', JSON.stringify(arr));}
else if(id==14){ const guardar10=  localStorage.setItem('guardar14', JSON.stringify(arr));}
else if(id==15){ const guardar11=  localStorage.setItem('guardar15', JSON.stringify(arr));}
else if(id==16){ const guardar12=  localStorage.setItem('guardar16', JSON.stringify(arr));}
else if(id==17){ const guardar13=  localStorage.setItem('guardar17', JSON.stringify(arr));}
else if(id==18){ const guardar10=  localStorage.setItem('guardar18', JSON.stringify(arr));}
else if(id==19){ const guardar11=  localStorage.setItem('guardar19', JSON.stringify(arr));}
else if(id==21){ const guardar12=  localStorage.setItem('guardar21', JSON.stringify(arr));}
else if(id==22){ const guardar13=  localStorage.setItem('guardar22', JSON.stringify(arr));}
else if(id==23){ const guardar2=  localStorage.setItem('guardar23', JSON.stringify(arr)); }
else if(id==24){ const guardar3=  localStorage.setItem('guardar24', JSON.stringify(arr));}
else if(id==25){ const guardar4=  localStorage.setItem('guardar25', JSON.stringify(arr));}
else if(id==26){ const guardar3=  localStorage.setItem('guardar26', JSON.stringify(arr));}
else if(id==27){ const guardar6=  localStorage.setItem('guardar27', JSON.stringify(arr));}
else if(id==28){ const guardar7=  localStorage.setItem('guardar28', JSON.stringify(arr));}
else if(id==29){ const guardar8=  localStorage.setItem('guardar29', JSON.stringify(arr));}
else if(id==30){ const guardar9=  localStorage.setItem('guardar30', JSON.stringify(arr));}
else if(id==31){ const guardar10=  localStorage.setItem('guardar31', JSON.stringify(arr));}
else if(id==32){ const guardar11=  localStorage.setItem('guardar32', JSON.stringify(arr));}
else if(id==33){ const guardar12=  localStorage.setItem('guardar33', JSON.stringify(arr));}
else if(id==34){ const guardar13=  localStorage.setItem('guardar34', JSON.stringify(arr));}
else if(id==35){ const guardar10=  localStorage.setItem('guardar35', JSON.stringify(arr));}
else if(id==36){ const guardar11=  localStorage.setItem('guardar36', JSON.stringify(arr));}
else if(id==37){ const guardar12=  localStorage.setItem('guardar37', JSON.stringify(arr));}
else if(id==39){ const guardar13=  localStorage.setItem('guardar39', JSON.stringify(arr));}
else if(id==40){ const guardar10=  localStorage.setItem('guardar40', JSON.stringify(arr));}
else if(id==41){ const guardar11=  localStorage.setItem('guardar41', JSON.stringify(arr));}
   } })}})}})}))

  
  
   imagen__carrito.forEach((el=>{
    carritoCompra=[]
    el.addEventListener("click", (e)=>{
       const busqueda= e.target.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[3].textContent
       const cantidad = document.querySelectorAll(".cantidad__carrito")

       const tituloNuevo = carritoFinal.find(item =>item.ptitulo==busqueda)
     
      if(busqueda==tituloNuevo.ptitulo){
  
   carritoFinal.forEach((el)=>{
   if(busqueda==el.ptitulo)
   {
     cantidad.forEach((e)=>{
     const ok = e.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[3].textContent
     if(busqueda==ok){
     const se = e.parentNode.parentNode
     const id = el.pid
    const precio= el.pprecio
    const titulo=el.ptitulo
    const cantidadd=el.pcantidad
     carritoFinal = carritoFinal.filter(function( obj ) {
     
      return obj.pid !== id ;
  });


const local=  localStorage.setItem('local', JSON.stringify(carritoFinal));

let viejo ={

  pprecio:precio,
  ptitulo:titulo,
  pcantidad: cantidadd,
 pid:id


};  const arr=[viejo]
let eso= ""
 eso= [viejo]
eso = eso.filter(function( obj ) {
 return obj.pid !== id ; });

resultado()
if(id==1){
  const guardar1=  localStorage.setItem('guardar1', JSON.stringify(null));
}
else if(id==2){ const guardar2=  localStorage.setItem('guardar2', JSON.stringify(null)); }
else if(id==3){ const guardar3=  localStorage.setItem('guardar3', JSON.stringify(null));}
else if(id==4){ const guardar4=  localStorage.setItem('guardar4', JSON.stringify(null));}
else if(id==5){ const guardar3=  localStorage.setItem('guardar5', JSON.stringify(null));}
else if(id==6){ const guardar6=  localStorage.setItem('guardar6', JSON.stringify(null));}
else if(id==7){ const guardar7=  localStorage.setItem('guardar7', JSON.stringify(null));}
else if(id==8){ const guardar8=  localStorage.setItem('guardar8', JSON.stringify(null));}
else if(id==9){ const guardar9=  localStorage.setItem('guardar9', JSON.stringify(null));}
else if(id==10){ const guardar10=  localStorage.setItem('guardar10', JSON.stringify(null));}
else if(id==11){ const guardar11=  localStorage.setItem('guardar11', JSON.stringify(null));}
else if(id==12){ const guardar12=  localStorage.setItem('guardar12', JSON.stringify(null));}
else if(id==13){ const guardar13=  localStorage.setItem('guardar13', JSON.stringify(null));}
else if(id==14){ const guardar10=  localStorage.setItem('guardar14', JSON.stringify(null));}
else if(id==15){ const guardar11=  localStorage.setItem('guardar15', JSON.stringify(null));}
else if(id==16){ const guardar12=  localStorage.setItem('guardar16', JSON.stringify(null));}
else if(id==17){ const guardar13=  localStorage.setItem('guardar17', JSON.stringify(null));}
else if(id==18){ const guardar10=  localStorage.setItem('guardar18', JSON.stringify(null));}
else if(id==19){ const guardar11=  localStorage.setItem('guardar19', JSON.stringify(null));}
else if(id==21){ const guardar12=  localStorage.setItem('guardar21', JSON.stringify(null));}
else if(id==22){ const guardar13=  localStorage.setItem('guardar22', JSON.stringify(null));}
else if(id==23){ const guardar2=  localStorage.setItem('guardar23', JSON.stringify(null)); }
else if(id==24){ const guardar3=  localStorage.setItem('guardar24', JSON.stringify(null));}
else if(id==25){ const guardar4=  localStorage.setItem('guardar25', JSON.stringify(null));}
else if(id==26){ const guardar3=  localStorage.setItem('guardar26', JSON.stringify(null));}
else if(id==27){ const guardar6=  localStorage.setItem('guardar27', JSON.stringify(null));}
else if(id==28){ const guardar7=  localStorage.setItem('guardar28', JSON.stringify(null));}
else if(id==29){ const guardar8=  localStorage.setItem('guardar29', JSON.stringify(null));}
else if(id==30){ const guardar9=  localStorage.setItem('guardar30', JSON.stringify(null));}
else if(id==31){ const guardar10=  localStorage.setItem('guardar31', JSON.stringify(null));}
else if(id==32){ const guardar11=  localStorage.setItem('guardar32', JSON.stringify(null));}
else if(id==33){ const guardar12=  localStorage.setItem('guardar33', JSON.stringify(null));}
else if(id==34){ const guardar13=  localStorage.setItem('guardar34', JSON.stringify(null));}
else if(id==35){ const guardar10=  localStorage.setItem('guardar35', JSON.stringify(null));}
else if(id==36){ const guardar11=  localStorage.setItem('guardar36', JSON.stringify(null));}
else if(id==37){ const guardar12=  localStorage.setItem('guardar37', JSON.stringify(null));}
else if(id==39){ const guardar10=  localStorage.setItem('guardar39', JSON.stringify(null));}
else if(id==40){ const guardar11=  localStorage.setItem('guardar40', JSON.stringify(null));}
else if(id==41){ const guardar12=  localStorage.setItem('guardar41', JSON.stringify(null));}

se.remove()

     } })}})
  }})}))
}
  
function compre(carritoFinal){
  const carrito = document.querySelector(".imagenCarro")
const totalCompra=document.querySelector(".cart-total")
 


carrito.addEventListener("click", ()=>{
let suma= 0
carritoFinal.forEach((el)=>{
let si=el.pprecio*el.pcantidad
suma += si

})
console.log(suma)
totalCompra.innerHTML=suma
const total = totalCompra
localStorage.setItem("local", JSON.stringify(carritoFinal))
localStorage.setItem("total", JSON.stringify(total))

}) 
}