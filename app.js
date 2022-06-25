const express = require('express');
const path = require('path');
const app = express();


//Le digo a Express que quiero hacer uso de algunos archivos estáticos y van a estar en la ruta que le paso como parametro.
app.use(express.static('public')); 

// Ahora linkeo la aplicacion con el Home.
app.get("/", (_req, res) => {
    let home = path.join(__dirname, './views/home.html');
    res.sendFile(home);

});

app.get("/register", (_req, res) => {
    let register = path.join(__dirname, './views/register.html');
    res.sendFile(register);

});

app.get("/login", (_req, res) => {
    let login = path.join(__dirname, './views/login.html');
    res.sendFile(login);
 
});

//Escuchamos por Puerto 3000- Siempre al final segun el profe.
app.listen(process.env.PORT || 3000, function() {
    console.log(`Servidor escuchando en puerto ${app.get('puerto')}`);  
});

/*
app.listen(3030, ()=>{
    console.log("Servidor escuchando en puerto 3030");
});*/
