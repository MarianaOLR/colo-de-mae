let memoriaModel = require("../models/memoriaModel");

function cadastrar(req, res) {
    let titulo = req.body.tituloServer;
    let data = req.body.dataServer;
    let descricao = req.body.descricaoServer;
    let musica = req.body.musicaServer;
    let frase = req.body.fraseServer;
    let sentimento = req.body.sentimentoServer;
    let foto = req.body.fotoServer;
    let fkUsuario = req.body.fkUsuarioServer;

    if (titulo == undefined) {
        res.status(400).send("O título está undefined!");
    } else if (data == undefined) {
        res.status(400).send("A data está undefined!");
    } else if (descricao == undefined) {
        res.status(400).send("A descrição está undefined!");
    } else if (sentimento == undefined) {
        res.status(400).send("O sentimento está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("O usuário está undefined! Faça login de novo.");
    } else {
        memoriaModel.cadastrar(titulo, data, descricao, musica, frase, sentimento, foto, fkUsuario)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function listar(req, res) {
    let fkUsuario = req.params.fkUsuario;

    if (fkUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else {
        memoriaModel.listar(fkUsuario)
            .then(function (resultado) {
                res.status(200).json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    cadastrar,
    listar
};