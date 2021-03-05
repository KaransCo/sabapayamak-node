var sabapayamak = require("./sabapayamak")
var api = sabapayamak.SabapayamakApi({
    host: 'api.sabapayamak.com'
});
api.getToken('ghanimati', 'd9ace', '3000710901', 1,
    function(response, status) {
        console.log(response);
        console.log(status);
    });