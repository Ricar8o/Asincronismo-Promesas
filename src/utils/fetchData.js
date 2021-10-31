let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// Fetch también sirve para hacer peticiones pero este usa promesas, para entender emjor el asincronismo se usa xmlhttprequest

const fetchData = (url_api) => {

    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) {
                // Este if hace lo mismo que el if equivalente en src\callback\challenge.js pero sin callbacks
                (xhttp.status == 200) 
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error', url_api))
            }
        });
        xhttp.send();
    });    
}

// Se usa module.exports por estar utilizando node (sintaxis)
module.exports = fetchData;