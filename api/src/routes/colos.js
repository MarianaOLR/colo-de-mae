let express = require("express");
let router = express.Router();

let coloController = require("../controllers/coloController");

router.get("/listar/:fkUsuario", function (req, res) {
    coloController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    coloController.cadastrar(req, res);
});

router.delete("/excluir/:idColo/:fkUsuario", function (req, res) {
    coloController.excluir(req, res);
});

module.exports = router;