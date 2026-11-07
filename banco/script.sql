CREATE DATABASE colo_de_mae;
USE colo_de_mae;

CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(50),
    senha VARCHAR(50)
);

-- fk_usuario vazio = sentimento padrão (vale para todos); preenchido = criado pelo usuário
CREATE TABLE sentimento (
    id_sentimento INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20),
    fk_usuario INT NULL,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario)
);

-- fk_usuario vazio = pessoa padrão (vale para todos); preenchido = pessoa criada pelo usuário
CREATE TABLE colo (
    id_colo INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    fk_usuario INT NULL,
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

-- n:n entre memória e colo
CREATE TABLE memoria_colo (
    fk_memoria INT,
    fk_colo INT,
    PRIMARY KEY (fk_memoria, fk_colo),
    FOREIGN KEY (fk_memoria) REFERENCES memoria(id_memoria),
    FOREIGN KEY (fk_colo) REFERENCES colo(id_colo)
);

SHOW TABLES;

INSERT INTO usuario (nome, email, senha) VALUES
('Daniel', 'daniel@teste.com', '123'),
('Mariana', 'marianaa@teste.com', '456'),
('Eduarda', 'eduarda@teste.com', '789');

INSERT INTO sentimento (nome) VALUES
('Amor'), ('Alegria'), ('Gratidão'), ('Saudade');

INSERT INTO colo (nome) VALUES
('Mãe'), ('Amiga'), ('Namorado'), ('Eu mesma');

-- fk_sentimento: 1 Amor, 2 Alegria, 3 Gratidão, 4 Saudade
INSERT INTO memoria (titulo, data, descricao, musica, frase, foto, fk_usuario, fk_sentimento) VALUES
('Natal em família', '2025-12-25', 'Ceia na casa da tia com a mesa cheia', 'Então é Natal', 'Família é o melhor presente', 'https://exemplo.com/natal.jpg', 1, 1),
('Virada do ano', '2026-01-01', 'Fogos vendo da janela de casa', 'Show das Poderosas', 'Que venha o novo ano', 'https://exemplo.com/anonovo.jpg', 2, 2),
('Carnaval', '2026-02-17', 'Bloquinho na rua com as amigas', 'Mas que nada', 'Pular até cansar', 'https://exemplo.com/carnaval.jpg', 3, 2),
('Páscoa', '2026-04-05', 'Almoço em família e ovos de chocolate', 'Ovo de Páscoa', 'Gratidão por estarmos juntas', 'https://exemplo.com/pascoa.jpg', 1, 3),
('Dia das Mães', '2026-05-10', 'Café da manhã surpresa na cama', 'Mãe', 'Mãe é amor em forma de gente', 'https://exemplo.com/maes1.jpg', 2, 1),
('Dia das Mães', '2026-05-10', 'Bolo e flores para a mamãe', 'Super Mãe', 'Obrigada por tudo', 'https://exemplo.com/maes2.jpg', 3, 1),
('Festa junina', '2026-06-13', 'Quadrilha na escola, lembrei da infância', 'Flor de tangerina', 'Que saudade daquele tempo', 'https://exemplo.com/junina.jpg', 3, 4);

INSERT INTO memoria_colo (fk_memoria, fk_colo) VALUES
(1, 1),
(2, 4),
(3, 2),
(4, 1), (4, 4),
(5, 1),
(6, 1),
(7, 1), (7, 2);

SELECT * FROM usuario;
SELECT * FROM sentimento;
SELECT * FROM colo;
SELECT * FROM memoria;
SELECT * FROM memoria_colo;