const express =require('express');
//crear el servidor de express
const app=express();

app.get('/',(req,res)=>{

    res.json({
        ok:true,
        msg:'Hola mundo'
    })

})

app.listen(3000,()=>{
    console.log('Servidor corriendo en puerto 3001');
});