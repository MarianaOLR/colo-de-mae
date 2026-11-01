CREATE DATABASE colo_de_mae;
USE colo_de_mae;

CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(50),
    senha VARCHAR(50)
);

CREATE TABLE memoria (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(50),
    data DATE,
    descricao VARCHAR(500),
    musica VARCHAR(100),
    frase VARCHAR(100),
    sentimento VARCHAR(20),
    foto VARCHAR(255),
    fk_usuario INT,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

SHOW TABLES;