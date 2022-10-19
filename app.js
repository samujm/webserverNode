const http = require('http');
// import http from 'http';

//CREA EL SERVIDOR
http.createServer((request, response)=>{
    //request: informacion que están solicitando, toda la informacion del url que me están pidiendo en el sitio web, headers de la peticion, argumentos, etc
    //response: lo que el servidor va a responder
    
    // console.log(request);


    // request.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    Response.setHeader("Content-Disposition", "attachment;filename=lista.csv");

    response.writeHead(200, {'Content-Type': 'application/csv'});

    response.write( 'id, nombre' );
    response.write( '1, Fernando' );
    response.write( '2, Maria' );
    response.write( '3, Juan' );
    response.write( '4, Pedro' );


    const persona = {
        id:1,
        nombre: 'Fernando'
    }

    response.write('404 | Page not found ');
    response.write(JSON.stringify(persona));

    response.end();

})
.listen( 8080 );

console.log('Escuchando el puerto', 8080);