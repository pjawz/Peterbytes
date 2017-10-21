//Building out the Table of Data

function buildTable(obj) {
    var table = document.getElementById('coinTable');
    var coinName = document.createElement('h4');
    var coinText =  document.createElement('p');

    for (var i = 0; i < obj[i].length; i++) {
        var formatPrice = function formatPriceUSD() {
           var value = obj[i].price_usd.toString().substring(startIndex, obj[i].price_usd.length);
           console.log(value); 
        }

    }
}