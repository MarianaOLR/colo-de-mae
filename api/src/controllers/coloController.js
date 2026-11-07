let coloModel = require("../models/coloModel");

function listar(req, res) {
    let fkUsuario = req.params.fkUsuario;

    coloModel.listar(fkUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function cadastrar(req, res) {
    let nome = req.body.nomeServer;
    let fkUsuario = req.body.fkUsuarioServer;

    if (nome == null || fkUsuario == null) {
        res.status(400).send("Nome ou usuário não informado.");
    } else {
        coloModel.cadastrar(nome, fkUsuario)
            .then(function (resultado) {
                res.status(200).json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function excluir(req, res) {
    let idColo = req.params.idColo;
    let fkUsuario = req.params.fkUsuario;

    coloModel.contarUso(idColo)
        .then(function (resultado) {
            let total = resultado[0].total;

            if (total > 0) {
                res.status(400).send(`Essa pessoa está em ${total} memória(s). Tire-a delas antes de excluir.`);
            } else {
                coloModel.excluir(idColo, fkUsuario)
                    .then(function (resultado) {
                        if (resultado.affectedRows == 0) {
                            res.status(403).send("Só dá para excluir o que você mesma criou.");
                        } else {
                            res.status(200).json(resultado);
                        }
                    })
                    .catch(function (erro) {
                        console.log(erro);
                        res.status(500).json(erro.sqlMessage);
                    });
            }
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    listar,
    cadastrar,
    excluir
};