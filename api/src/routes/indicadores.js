let express = require("express");
let router = express.Router();

let indicadorController = require("../controllers/indicadorController");

router.get("/sentimentos/:fkUsuario", function (req, res) {
    indicadorController.sentimentos(req, res);
});

router.get("/aleatoria/:fkUsuario", function (req, res) {
    indicadorController.memoriaAleatoria(req, res);
});

router.get("/meses/:fkUsuario", function (req, res) {
    indicadorController.meses(req, res);
});

router.get("/resumo/:fkUsuario", function (req, res) {
    indicadorController.resumo(req, res);
});

router.get("/colos/:fkUsuario", function (req, res) {
    indicadorController.colos(req, res);
});

router.get("/colos-sentimentos/:fkUsuario", function (req, res) {
    indicadorController.colosSentimentos(req, res);
});

module.exports = router;