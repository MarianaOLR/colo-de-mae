let usuarioModel = require("../models/usuarioModel");

function mostrarErro(res, erro) {
    console.log(erro);
    res.status(500).json(erro.sqlMessage);
}

function cadastrar(req, res) {
    let nome = req.body.nomeServer;
    let email = req.body.emailServer;
    let senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        usuarioModel.cadastrar(nome, email, senha)
            .then(function (resultado) {
                let idNovo = resultado.insertId;

                usuarioModel.criarSentimentos(idNovo)
                    .then(function () {
                        usuarioModel.criarColos(idNovo)
                            .then(function () {
                                res.json(resultado);
                            })
                            .catch(function (erro) {
                                mostrarErro(res, erro);
                            });
                    })
                    .catch(function (erro) {
                        mostrarErro(res, erro);
                    });
            })
            .catch(function (erro) {
                if (erro.code == "ER_DUP_ENTRY") {
                    res.status(409).send("E-mail já cadastrado");
                } else {
                    mostrarErro(res, erro);
                }
            });
    }
}

function autenticar(req, res) {
    let email = req.body.emailServer;
    let senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        usuarioModel.autenticar(email, senha)
            .then(function (resultado) {
                if (resultado.length == 1) {
                    res.json(resultado[0]);
                } else {
                    res.status(403).send("Email e/ou senha inválido(s)");
                }
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    cadastrar,
    autenticar
}