const path =require('path');

const express = require("express");
const app=express();



app.set('port', process.env.PORT || 8080);
//static files

app.use(express.static(path.join(__dirname, 'public')));
module.exports = app


       
        
//opciones con un archivo router para el ingreso mediante peticion post
// router.get('/',(req,res)=>{
    
// })
// router.post('/',(req,res)=>{
//     let nombre=req.body.name;
//     let price=req.body.price;
//     let image= req.body.urlIMG;
//     let idnew= (productos.length)+1;
        
//     const ingreso= {
//         title: nombre,
//         price: price,
//         image: image, 
//         id:idnew
//     }
//     productos.push(ingreso);
//     console.log(productos);
// })












//websocket




