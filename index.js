const request = require('request');

function roundToTwo(array) {
    for (i in array) {
        array[i] = +(Math.round(array[i] + "e+2")  + "e-2");
    }
}

function objetificar(objeto) {
    if (objeto[0] == '{' && objeto[objeto.length - 1] == '}') {
        return (JSON.parse(objeto));
    } else {
        return (objeto);
    }
}

function doRequest(customUrl) {
    return new Promise(function (resolve, reject) {
        request.get({
            // caso ocorra erros durante a cadeia de certificado
            //"rejectUnauthorized": false,
            url: customUrl,
            time: true
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                resolve(response);
            } else {
                console.log(response.statusCode);
                reject(error);
            }
        });
    });
}

async function main(url) {
    const response = await doRequest(url);
    roundToTwo(res.timingPhases);
    console.log(res.timingPhases);
}


const url1 = "https://educacao.genialinvestimentos.com.br/portal/login";
const url2 = "http://10.160.65.161:5000/hc";

main(url1);
