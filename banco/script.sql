DROP DATABASE IF EXISTS colo_de_mae;
CREATE DATABASE colo_de_mae;
USE colo_de_mae;

CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(50) UNIQUE,
    senha VARCHAR(50)
);

CREATE TABLE sentimento (
    id_sentimento INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20),
    fk_usuario INT NOT NULL,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE colo (
    id_colo INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    fk_usuario INT NOT NULL,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE memoria (
    id_memoria INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(50),
    data DATE,
    descricao VARCHAR(500),
    musica VARCHAR(100),
    frase VARCHAR(100),
    foto VARCHAR(255),
    fk_usuario INT,
    fk_sentimento INT,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario),
    FOREIGN KEY (fk_sentimento) REFERENCES sentimento(id_sentimento)
);

CREATE TABLE memoria_colo (
    fk_memoria INT,
    fk_colo INT,
    PRIMARY KEY (fk_memoria, fk_colo),
    FOREIGN KEY (fk_memoria) REFERENCES memoria(id_memoria),
    FOREIGN KEY (fk_colo) REFERENCES colo(id_colo)
);

SHOW TABLES;

INSERT INTO usuario (nome, email, senha) VALUES
('Mariana', 'mariana@exemplo.com', '123');

INSERT INTO sentimento (nome, fk_usuario) VALUES
('Amor', 1), ('Alegria', 1), ('Gratidão', 1), ('Saudade', 1);

INSERT INTO colo (nome, fk_usuario) VALUES
('Mãe', 1), ('Amiga', 1), ('Namorado', 1), ('Eu mesma', 1);

INSERT INTO memoria (titulo, data, descricao, musica, frase, foto, fk_usuario, fk_sentimento) VALUES
('Ano novo com a Duda', '2026-01-01',
 'Passei a virada do ano com a Duda, minha amiga.',
 'De Janeiro a Janeiro', 'Que passamos vários e vários anos juntinhas', '', 1, 2),
('Eu e a Naty', '2026-04-29',
 'Mesmo com todo o meu nervosismo para fazer a prova da SPTech, virei amiga da Nataly de cara. Me senti acolhida por mim mesma e pela minha amiga.',
 'Amigos para Sempre', 'Fiquei com raiva por você ser impostora', '', 1, 3),
('19 primaveras', '2026-06-08',
 'No meu aniversário, almocei com a minha mãe. Minha melhor amiga não pôde estar presente, mas me enviou um colar para eu usar no dia.',
 'Parabéns da Xuxa', 'Te amo, aproveita seu dia', '', 1, 2),
('Passei na SPTech!', '2026-06-26',
 'Recebi a notícia de que passei no processo seletivo da SPTech e logo fui avisar a minha mãe e o meu namorado, que na época era só um conhecido.',
 'Congratulations', 'PASSAMOS, COMEMORA, PULA!', '', 1, 3),
('Sou namorada de alguém...', '2026-10-10',
 'Em uma manhã de sábado, acordei com o cara que eu mais amo no mundo segurando uma caixa: um buquê de flores de cetim que ele mesmo fez, várias fotos nossas, uma carta linda e as alianças. Estou namorando! E claro, que minha mãe ajudou em tudo!',
 'Preciso Dizer Que Te Amo', 'Quer namorar comigo?', '', 1, 1);

INSERT INTO memoria_colo (fk_memoria, fk_colo) VALUES
(1, 2),
(2, 2), (2, 4),
(3, 1), (3, 2),
(4, 1), (4, 3),
(5, 1), (5, 3);

SELECT * FROM usuario;
SELECT * FROM sentimento;
SELECT * FROM colo;
SELECT * FROM memoria;
SELECT * FROM memoria_colo;