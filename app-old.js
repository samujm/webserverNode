const http = require('http');
// import http from 'http';

//CREA EL SERVIDOR
http.createServer((request, response)=>{
    //request: informacion que están solicitando, toda la informacion del url que me están pidiendo en el sitio web, headers de la peticion, argumentos, etc
    //response: lo que el servidor va a responder
    
    // console.log(request);

    // request.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    
    // response.writeHead(404);
    // response.writeHead(200, {'Content-Type': 'text/plain'});
    // response.writeHead(200, {'Content-Type': 'application/json'});
    // response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // response.writeHead(200, {'Content-Type': 'application/csv'});

    // const persona = {
    //     id:1,
    //     nombre: 'Fernando'
    // }

    // response.write( 'id, nombre\n' );
    // response.write( '1, Fernando\n' );
    // response.write( '2, Maria\n' );
    // response.write( '3, Juan\n' );
    // response.write( '4, Pedro\n' );

    // response.write('404 | Page not found ');

    //Serializar como un json
    // response.write(JSON.stringify(persona));
    // response.write('Hola Mundo');



    response.write('Hola Mundo');
    response.end();

})
.listen( 8080 );

console.log('Escuchando el puerto', 8080);