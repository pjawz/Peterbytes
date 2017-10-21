//Ajax call for Currency Data
$(window).on('load', function () {
    request();

});

var coin = {};
var usd = {
    "id": "usd",
    "name": "USD",
    "price_usd": "1.00"
}

function request() {
    var url = 'https://api.coinmarketcap.com/v1/ticker/?limit=10&convert=USD';

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            data.forEach((c) => coin[c.name] = c)
            buildDropdown(coin);
        });

}

function byId(id) {
    return document.getElementById(id)
}


function buildDropdown(coin) {
    for(key in coin) {
        $('.coinDropdown').append('<option>' + coin[key].name + '</option>');        
    }

    $('.coinDropdown').append('<option>' + usd.name + '</option>');            

    // Object.keys(coin).forEach(key => {
    //     $('.coinDropdown').append('<option>' + coin[key].name + '</option>');
    // })
        // for (var i = 0; i < coin.length; i++) {
        //     //<div class="col-2 coin"></div>

        // }
    }

function buildTable() {
    var coinTableData = '';

    for (key in coin) {
        var coinNameData = coin[key].name;
        var coinPriceData = coin[key].price_usd;
        var insertData = `<div class="col-2 coin">${coinNameData}<br/>${coinPriceData}</div>`;
        coinTableData +=insertData;

    }

    $('#coinTable').append(coinTableData);  
}


function priceConverter() {
    var priceIn = byId("priceIn").value;
    var coinIn = byId('priceInDropdown').value;
    var priceOut = byId('priceOut').value;
    var coinOut = byId('priceOutDropdown').value;

    var coinInPriceConverted = ((coin[coinIn].price_usd || usd.price_usd) * priceIn) / (coin[coinOut].price_usd || usd.price_usd)

    byId('priceOut').value = coinInPriceConverted.toFixed(6)
}
