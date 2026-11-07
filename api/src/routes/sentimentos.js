let express = require("express");
let router = express.Router();

let sentimentoController = require("../controllers/sentimentoController");

router.get("/listar/:fkUsuario", function (req, res) {
    sentimentoController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    sentimentoController.cadastrar(req, res);
});

router.delete("/excluir/:idSentimento/:fkUsuario", function (req, res) {
    sentimentoController.excluir(req, res);
});

module.exports = router;