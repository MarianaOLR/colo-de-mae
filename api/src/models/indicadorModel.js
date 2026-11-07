let database = require("../database/config");

function sentimentos(fkUsuario) {
    let instrucao = `
        SELECT sentimento.nome AS sentimento, COUNT(*) AS total
        FROM sentimento
        JOIN memoria ON sentimento.id_sentimento = memoria.fk_sentimento
        WHERE memoria.fk_usuario = ${fkUsuario}
        GROUP BY sentimento.nome
        ORDER BY total DESC;
    `;
    return database.executar(instrucao);
}

function memoriaAleatoria(fkUsuario) {
    let instrucao = `
        SELECT memoria.titulo, memoria.data, memoria.descricao, memoria.musica,
               memoria.frase, sentimento.nome AS sentimento
        FROM memoria
        JOIN sentimento ON sentimento.id_sentimento = memoria.fk_sentimento
        WHERE memoria.fk_usuario = ${fkUsuario}
        ORDER BY RAND()
        LIMIT 1;
    `;
    return database.executar(instrucao);
}

function meses(fkUsuario) {
    let instrucao = `
        SELECT MONTH(data) AS mes, COUNT(*) AS total
        FROM memoria
        WHERE fk_usuario = ${fkUsuario}
        GROUP BY MONTH(data)
        ORDER BY mes;
    `;
    return database.executar(instrucao);
}

function resumo(fkUsuario) {
    let instrucao = `
        SELECT COUNT(*) AS total,
               MIN(data) AS primeira,
               MAX(data) AS ultima,
               DATEDIFF(CURDATE(), MAX(data)) AS dias
        FROM memoria
        WHERE fk_usuario = ${fkUsuario};
    `;
    return database.executar(instrucao);
}

function colos(fkUsuario) {
    let instrucao = `
        SELECT colo.nome, COUNT(*) AS total
        FROM colo
        JOIN memoria_colo ON colo.id_colo = memoria_colo.fk_colo
        JOIN memoria ON memoria.id_memoria = memoria_colo.fk_memoria
        WHERE memoria.fk_usuario = ${fkUsuario}
        GROUP BY colo.nome
        ORDER BY total DESC;
    `;
    return database.executar(instrucao);
}

function colosSentimentos(fkUsuario) {
    let instrucao = `
        SELECT colo.nome, sentimento.nome AS sentimento, COUNT(*) AS total
        FROM colo
        JOIN memoria_colo ON colo.id_colo = memoria_colo.fk_colo
        JOIN memoria ON memoria.id_memoria = memoria_colo.fk_memoria
        JOIN sentimento ON sentimento.id_sentimento = memoria.fk_sentimento
        WHERE memoria.fk_usuario = ${fkUsuario}
        GROUP BY colo.nome, sentimento.nome
        ORDER BY colo.nome, total DESC;
    `;
    return database.executar(instrucao);
}

module.exports = {
    sentimentos,
    memoriaAleatoria,
    meses,
    resumo,
    colos,
    colosSentimentos
};