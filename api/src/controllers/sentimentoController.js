let sentimentoModel = require("../models/sentimentoModel");

function listar(req, res) {
    let fkUsuario = req.params.fkUsuario;

    sentimentoModel.listar(fkUsuario)
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

    if (nome == undefined || fkUsuario == undefined) {
        res.status(400).send("Nome ou usuário não informado.");
    } else {
        sentimentoModel.cadastrar(nome, fkUsuario)
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
    let idSentimento = req.params.idSentimento;
    let fkUsuario = req.params.fkUsuario;

    sentimentoModel.contarUso(idSentimento)
        .then(function (resultado) {
            let total = resultado[0].total;

            if (total > 0) {
                res.status(400).send(`Esse sentimento está em ${total} memória(s). Tire-o delas antes de excluir.`);
            } else {
                sentimentoModel.excluir(idSentimento, fkUsuario)
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