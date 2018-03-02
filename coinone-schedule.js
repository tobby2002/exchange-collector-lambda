var AWS = require('aws-sdk');

let base = "krw";
let coins = [
    "btc",
    "bch",
    "eth",
    "etc",
    "xrp",
    "qtum",
    "ltc",
    "iota",
    "btg"
];

var lambda = new AWS.Lambda({
  region: 'ap-northeast-2'
});

exports.handler = (event, context, callback) => {
    for (let coin of coins) {
        console.log(coin);
        let attr = {
            base: base,
            coin: coin
        };

        lambda.invoke({
            FunctionName: 'coinone-collector',
            Payload: JSON.stringify(attr, null, 0) // pass params
        }, function(err, data){
            if(err) console.log("err: ", base, coin, err, data);
        });
        //FOR TEST
        // var index = require("./coinone-index.js");
        // index.handler(attr, context);
    }
}