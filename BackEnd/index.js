//crear el servidor de express
const express =require('express');
const {dbConnection} = require('./database/config');
const cors = require('cors');

require('dotenv').config();

const app=express();

//Configurando CORS
app.use(cors());

//Base de datos
dbConnection();

//Rutas
app.get('/',(req,res)=>{

    res.json({
        ok:true,
        msg:'Hola mundo'
    })

})

app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});