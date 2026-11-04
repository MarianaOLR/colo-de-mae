let database = require("../database/config");

function sentimentos(fkUsuario) {
    let instrucao = `
        SELECT sentimento, COUNT(*) AS total
        FROM memoria
        WHERE fk_usuario = ${fkUsuario}
        GROUP BY sentimento
        ORDER BY total DESC;
    `;
    return database.executar(instrucao);
}

function memoriaAleatoria(fkUsuario) {
    let instrucao = `
        SELECT titulo, data, descricao, musica, frase, sentimento
        FROM memoria
        WHERE fk_usuario = ${fkUsuario}
        ORDER BY RAND()
        LIMIT 1;
    `;
    return database.executar(instrucao);
}

module.exports = {
    sentimentos,
    memoriaAleatoria
};