const socket = io.connect(); 

const email = document.getElementById('Gmail')
const mensaje= document.getElementById('mensaje')
const chat=document.getElementById('chat')
const btn = document.getElementById('envio')
//chat
btn.addEventListener('click', function(){
    socket.emit('mensaje',{
        menssage: mensaje.value,
        Gmail: email.value

    });
    socket.on('mensajes',function (datos){
        // chat.innerHTML=`<p> <strong>${datos.Gmail}: <strong> ${datos.menssage} </p> `
    })
});


//Se buguea o creo que recibe mal desde el back, testear correctamente
// function obtenerPlantillaProductos(productos) {
  
//     // return html completo de la plantilla con los productosreturn 
//     fetch('./products.hbs')
//     .then(response => response.text())
//     .then(plantilla => {
//             const plantillaHBS = Handlebars.compile(plantilla)
//             const htmlCompleto = plantillaHBS({ productos })
//             return htmlCompleto
//         })
// }
// socket.on('productos', async products => {
//     const html = await obtenerPlantillaProductos(products)
//     document.getElementById('TablaSalida').innerHTML = html
// }) 


