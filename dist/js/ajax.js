{"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "//Ajax call to Coin Market Place for Currency Data\r\nwindow.onload = function(){\r\n    var http = new XMLHttpRequest();\r\n\r\n    http.open(\"GET\", \"https://api.coinmarketcap.com/v1/ticker/\", true);\r\n    http.send();\r\n\r\n    console.log(http);\r\n};";
},"useData":true}