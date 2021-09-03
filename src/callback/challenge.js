let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback){// nos permite traer información de nuestra API y desencadenar los llamados que necesitamos
    let xhttp = new XMLHttpRequest()// generamos la referencia al objeto que necesitamos
    xhttp.open('GET', url_api, true); // "abrimos" o hacemos un LLAMADO a una url. 1: método, 2: url, 3: si es async o no (por defecto lo es)
    xhttp.onreadystatechange = function (event){ // le dice que escuche un elemento y que cuando cambie haga una func
    // se genera una validación para saber si el estado en que se encuentra es satisfactorio, hay varios estados AJAX, desde el 0 al 4
        if(xhttp.readyState === 4){ // 4 significa que la información llegó
            if(xhttp.status === 200){ // el status HTML, existen 400, 300, 500
                callback(null, JSON.parse(xhttp.responseText)); // por estándares se utiliza el error como el primer parámetro y la respuesta como el segundo. // se tiene que parsear ya que es un texto, ya que sino solo se mandará un string
            } else {
                const err = new Error('Error ' + url_api);
                return callback(err, null) // en segundas se pasa null ya que no mandó info sino que hubo un error
            }
        }
    }
    xhttp.send() // se manda la solicitud
}

fetchData(API, function(err1, data1){
    if(err1) return console.error(err1);
    fetchData(API + data1.results[0].id, function(err2, data2){
        if(err2) return console.error(err2);
        fetchData(data2.origin.url, function(err3, data3){
            if(err3) return console.error(err3);
            console.log(data1.info.count); // muestra la cantidad de personajes que hay
            console.log(data2.name); // obtiene el nombre del personaje 1
            console.log(data3.dimension); // obtiene la dimension del personaje 3
        });
    });
})

