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
                reject(response);
                //reject(error);
            }
        });
    });
}

function printaTudo(res) {
    console.log("res.timingPhases: ");
    console.log(res.timingPhases);
    console.log("res.statusCode: " + res.statusCode);
    console.log("res.statusMessage: " + res.statusMessage);
    console.log("res.request.method: " + res.request.method);
    console.log("res.socket._host: " + res.socket._host);
    console.log("res.request.host: " + res.request.host);
    console.log("res.request.originalHost: " + res.request.originalHost);
    console.log("res.request.uri.hostname: " + res.request.uri.hostname);
    console.log("res.client.servername: " + res.client.servername);
    console.log("res.request.port: " + res.request.port);
    console.log("res.request.uri.protocol: " + res.request.uri.protocol);
    console.log("res.request.path: " + res.request.path);
    console.log("res.request.uri.pathname: " + res.request.uri.pathname);
    console.log("res.client_httpMessage.path: " + res.client._httpMessage.path);
    console.log("res.request.href: " + res.request.href);
}

async function main(url) {
    console.log("\n\n:: REQUEST REALIZADO PARA - " + url + " ::");
    await doRequest(url).then((res) => {
        printaTudo(res);
    }).catch((err) => {
        if (err != null) {printaTudo(err);}
        else {console.log("Retorno do 'response' foi nulo :(")}
    });
    console.log("\n\n");
    /*
    roundToTwo(response.timingPhases);
    console.log(response.timingPhases);
    console.log(response.req)*/

    /*
    IMPORTANT RESOURCES
    .timingPhases
    .statuscode
    .servername
    .host
    .path
    .port
    .href

    */
}


const url0 = "http://10.160.65.161:5000/hc";
const url1 = "https://educacao.genialinvestimentos.com.br/portal/login";
const url2 = "https://genialinvestimentos.com";
const url3 = "https://educacao.genialinvestimentos.com.br/test";
const url4 = "https://4EDGeducacao.genialinvestimentos.com.br/test";
const url5 = "https://4EDGeducacao.genialinvestimentos.com.br/testasd";
const url6 = "http://getstatuscode.com/400";
const url7 = "http://getstatuscode.com/200";
const url8 = "http://getstatuscode.com/302";
const url9 = "http://getstatuscode.com/404";
const url10 = "http://getstatuscode.com/500";

async function maaaain() {
await main(url1);
await main(url2);
await main(url3);
await main(url4);
await main(url5);
await main(url6);
await main(url7);
await main(url8);
await main(url9);
await main(url10);
}

maaaain();
