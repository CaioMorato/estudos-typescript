"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var URL = 'https://api.github.com/users/caiomorato';
axios_1["default"].get(URL).then(function (response) {
    var data = response.data;
    var id = data.id, name = data.name, hireable = data.hireable;
    console.log("ID do usu\u00E1rio: " + id, "Nome do usu\u00E1rio: " + name, "Usu\u00E1rio dispon\u00EDvel pra contrata\u00E7\u00E3o: " + hireable);
});
