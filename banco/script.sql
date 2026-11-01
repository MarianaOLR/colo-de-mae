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

INSERT INTO usuario (nome, email, senha) VALUES
('Daniel', 'daniel@teste.com', '123'),
('Mariana', 'marianaa@teste.com', '456'),
('Eduarda', 'eduarda@teste.com', '789');

INSERT INTO memoria (titulo, data, descricao, musica, frase, sentimento, foto, fk_usuario) VALUES
('Natal em família', '2025-12-25', 'Ceia na casa da tia com a mesa cheia', 'Então é Natal', 'Família é o melhor presente', 'Amor', 'https://exemplo.com/natal.jpg', 1),
('Virada do ano', '2026-01-01', 'Fogos vendo da janela de casa', 'Show das Poderosas', 'Que venha o novo ano', 'Alegria', 'https://exemplo.com/anonovo.jpg', 2),
('Carnaval', '2026-02-17', 'Bloquinho na rua com as amigas', 'Mas que nada', 'Pular até cansar', 'Alegria', 'https://exemplo.com/carnaval.jpg', 3),
('Páscoa', '2026-04-05', 'Almoço em família e ovos de chocolate', 'Ovo de Páscoa', 'Gratidão por estarmos juntas', 'Gratidão', 'https://exemplo.com/pascoa.jpg', 1),
('Dia das Mães', '2026-05-10', 'Café da manhã surpresa na cama', 'Mãe', 'Mãe é amor em forma de gente', 'Amor', 'https://exemplo.com/maes1.jpg', 2),
('Dia das Mães', '2026-05-10', 'Bolo e flores para a mamãe', 'Super Mãe', 'Obrigada por tudo', 'Amor', 'https://exemplo.com/maes2.jpg', 3),
('Festa junina', '2026-06-13', 'Quadrilha na escola, lembrei da infância', 'Flor de tangerina', 'Que saudade daquele tempo', 'Saudade', 'https://exemplo.com/junina.jpg', 3);

SELECT * FROM usuario;
SELECT * FROM memoria;

SELECT usuario.nome, memoria.titulo, memoria.data
FROM usuario
JOIN memoria
ON usuario.id = memoria.fk_usuario;