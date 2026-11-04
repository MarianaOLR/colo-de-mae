let express = require("express");
let router = express.Router();

let indicadorController = require("../controllers/indicadorController");

router.get("/sentimentos/:fkUsuario", function (req, res) {
    indicadorController.sentimentos(req, res);
});

router.get("/aleatoria/:fkUsuario", function (req, res) {
    indicadorController.memoriaAleatoria(req, res);
});

module.exports = router;