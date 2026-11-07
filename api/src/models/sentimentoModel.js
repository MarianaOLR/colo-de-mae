let database = require("../database/config");

function listar(fkUsuario) {
    let instrucao = `
        SELECT id_sentimento, nome, fk_usuario
        FROM sentimento
        WHERE fk_usuario = ${fkUsuario}
        ORDER BY id_sentimento;
    `;
    return database.executar(instrucao);
}

function cadastrar(nome, fkUsuario) {
    let instrucaoSql = `
        INSERT INTO sentimento (nome, fk_usuario) VALUES ('${nome}', ${fkUsuario});
    `;
    return database.executar(instrucaoSql);
}

function contarUso(idSentimento) {
    let instrucaoSql = `
        SELECT COUNT(*) AS total FROM memoria
        WHERE fk_sentimento = ${idSentimento};
    `;
    return database.executar(instrucaoSql);
}

function excluir(idSentimento, fkUsuario) {
    let instrucaoSql = `
        DELETE FROM sentimento
        WHERE id_sentimento = ${idSentimento} AND fk_usuario = ${fkUsuario};
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    cadastrar,
    contarUso,
    excluir
};