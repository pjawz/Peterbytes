//Ajax call for Currency Data
$(window).on('load', function() {
    var obj;
    
    function request() {
        var url = 'https://api.coinmarketcap.com/v1/ticker/?limit=10&convert=USD';
    
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                obj = parseJSON(data);
                buildDropdown(obj);
            });
    
    }
    
    
    function buildDropdown(obj) {
        var coin = obj;
        
        for(var i = 0; i < coin.length; i++) {
            $('.coinDropdown').append('<option>' + coin[i].name + '</option>');
            
        }
    }
    request();
});