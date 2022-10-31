const express = require("express");
const hbs = require('hbs');

const app = express();
const port = 8080;

//Handlebar
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));
//Al entrar al path del / (anterior linea) lo siguiente ya no se ejecuta

//Esto ya no se ejecuta
// app.get("/", (req, res)=> {
//     res.send("Home page");
// });


app.get("/", (req, res)=> {
    res.render('home',{
        nombre: 'Samantha',
        titulo: 'Curso de Node'
    });
});

app.get("/generic", (req, res)=> {
    res.render('generic',{
        nombre: 'Samantha',
        titulo: 'Curso de Node'
    });
});

app.get("/elements", (req, res)=> {
    res.render('elements',{
        nombre: 'Samantha',
        titulo: 'Curso de Node'
    });
});


// app.get("/generic", (req, res)=> {
//     res.sendFile( __dirname + '/public/generic.html');
// });

// app.get("/elements", (req, res)=> {
//     res.sendFile( __dirname + '/public/elements.html');
// });


app.get("*", (req, res)=> {
    res.sendFile( __dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})