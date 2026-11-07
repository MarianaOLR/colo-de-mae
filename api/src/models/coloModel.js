let database = require("../database/config");

function listar(fkUsuario) {
    let instrucaoSql = `
        SELECT id_colo, nome, fk_usuario FROM colo
        WHERE fk_usuario IS NULL OR fk_usuario = ${fkUsuario}
        ORDER BY nome;
    `;
    return database.executar(instrucaoSql);
}

function cadastrar(nome, fkUsuario) {
    let instrucaoSql = `
        INSERT INTO colo (nome, fk_usuario) VALUES ('${nome}', ${fkUsuario});
    `;
    return database.executar(instrucaoSql);
}

function contarUso(idColo) {
    let instrucaoSql = `
        SELECT COUNT(*) AS total FROM memoria_colo
        WHERE fk_colo = ${idColo};
    `;
    return database.executar(instrucaoSql);
}

function excluir(idColo, fkUsuario) {
    let instrucaoSql = `
        DELETE FROM colo
        WHERE id_colo = ${idColo} AND fk_usuario = ${fkUsuario};
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    cadastrar,
    contarUso,
    excluir
};