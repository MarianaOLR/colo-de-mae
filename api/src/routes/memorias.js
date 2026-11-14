let express = require("express");
let router = express.Router();

let memoriaController = require("../controllers/memoriaController");

router.post("/cadastrar", function (req, res) {
    memoriaController.cadastrar(req, res);
});

router.get("/listar/:fkUsuario", function (req, res) {
    memoriaController.listar(req, res);
});

router.delete("/excluir/:idMemoria/:fkUsuario", function (req, res) {
    memoriaController.excluir(req, res);
});

router.put("/editar/:idMemoria", function (req, res) {
    memoriaController.atualizar(req, res);
});

module.exports = router;