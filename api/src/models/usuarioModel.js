let database = require("../database/config");

function cadastrar(nome, email, senha) {
    let instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    return database.executar(instrucaoSql);
}

function criarSentimentos(fkUsuario) {
    let instrucaoSql = `
        INSERT INTO sentimento (nome, fk_usuario) VALUES
        ('Amor', ${fkUsuario}),
        ('Alegria', ${fkUsuario}),
        ('Gratidão', ${fkUsuario}),
        ('Saudade', ${fkUsuario});
    `;
    return database.executar(instrucaoSql);
}

function criarColos(fkUsuario) {
    let instrucaoSql = `
        INSERT INTO colo (nome, fk_usuario) VALUES
        ('Mãe', ${fkUsuario}),
        ('Amiga', ${fkUsuario}),
        ('Namorado', ${fkUsuario}),
        ('Eu mesma', ${fkUsuario});
    `;
    return database.executar(instrucaoSql);
}

function autenticar(email, senha) {
    let instrucaoSql = `
        SELECT id_usuario, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    criarSentimentos,
    criarColos,
    autenticar
};