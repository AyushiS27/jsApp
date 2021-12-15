'use strict';



//const http = require('https');

const https = require('https');



async function fetchApiForStocks(date){
     
     return new Promise((resolve, reject) => {
        https.get(`https://jsonmock.hackerrank.com/api/stocks?date=${date}`, (res) => {
            console.log('statusCode:', res.statusCode);
            console.log('headers:', res.headers);

            res.on('data', (d) => {
                //console.log(JSON.parse(d));
                //process.stdout.write(d);
                resolve(JSON.parse(d));
            });

            }).on('error', (e) => {
            console.error(e);
        });
     })
}

var date = "05-January-2000";
let dateSplit = date.split('-');
dateSplit[0] = +dateSplit[0];
date = dateSplit.join('-');

console.log("Date", date);
fetchApiForStocks(date).then(data => {
    console.log("Final &&&&&&&&&&&&&&&&&&&&&&&&&&", data);
});
     
    
// }

// async function getStockInformation(date) {
//     // write your code here
//     // API endpoint: https://jsonmock.hackerrank.com/api/stocks?date=<date>
//     return fetchApiForStocks("5-January-2000").then((data) => {
//         console.log("Res", data);
//         return data.length > 0 ? data[0] : [];
//     });
//     // return fetchApiForStocks("5-January-2000").then((data) => {
//     //     console.log("Data", data);
//     // })
    
//    // fetch('`https://jsonmock.hackerrank.com/api/stocks?date=5-January-2000')
//    // return {};
// }

//fetchApiForStocks();
