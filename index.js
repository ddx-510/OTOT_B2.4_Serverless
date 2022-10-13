const functions = require('@google-cloud/functions-framework');
const escapeHtml = require('escape-html');
const https = require("https");
/**
 * Responds to an HTTP request using data from the request body parsed according
 * to the "content-type" header.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
functions.http('weather', (req, res) => {

    let url = 'https://api.data.gov.sg/v1/environment/2-hour-weather-forecast';
    https.get(url, (response) => {
        response.on('data', (result)=>{
            const data = JSON.parse(result);
            const city = req.query.name;
            const finalResult = data.items[0].forecasts.find(o=>o.area === city);
            res.send(finalResult);
        }).on('error', (error)=>{
            res.send(error);
        })
    });
     

    // res.send(`Hello ${escapeHtml(req.query.name || req.body.name || 'World')}!`);

});

  