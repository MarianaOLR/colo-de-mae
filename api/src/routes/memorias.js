let express = require("express");
let router = express.Router();

let memoriaController = require("../controllers/memoriaController");

router.post("/cadastrar", function (req, res) {
    memoriaController.cadastrar(req, res);
});

module.exports = router;