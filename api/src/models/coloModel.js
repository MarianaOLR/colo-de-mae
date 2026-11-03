let database = require("../database/config");

function listar() {
    let instrucaoSql = `
        SELECT id_colo, nome FROM colo ORDER BY nome;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    listar
};