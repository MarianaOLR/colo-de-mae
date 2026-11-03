let express = require("express");
let router = express.Router();

let coloController = require("../controllers/coloController");

router.get("/listar", function (req, res) {
    coloController.listar(req, res);
});

module.exports = router;