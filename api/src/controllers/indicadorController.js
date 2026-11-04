let indicadorModel = require("../models/indicadorModel");

function sentimentos(req, res) {
    let fkUsuario = req.params.fkUsuario;

    indicadorModel.sentimentos(fkUsuario).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function memoriaAleatoria(req, res) {
    let fkUsuario = req.params.fkUsuario;

    indicadorModel.memoriaAleatoria(fkUsuario).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = { sentimentos, memoriaAleatoria };