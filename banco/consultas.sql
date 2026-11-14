USE colo_de_mae;

-- ===== CONSULTAS SIMPLES =====
SELECT * FROM usuario;
SELECT * FROM sentimento;
SELECT * FROM colo;
SELECT * FROM memoria;
SELECT * FROM memoria_colo;
SELECT * FROM sentimento WHERE fk_usuario = 1;
SELECT * FROM colo WHERE fk_usuario = 1;

SELECT usuario.nome,
       COUNT(DISTINCT sentimento.id_sentimento) AS sentimentos,
       COUNT(DISTINCT colo.id_colo) AS colos
FROM usuario
JOIN sentimento ON sentimento.fk_usuario = usuario.id_usuario
JOIN colo ON colo.fk_usuario = usuario.id_usuario
GROUP BY usuario.nome;

SELECT memoria.titulo, usuario.nome AS dono_da_memoria,
       sentimento.nome AS sentimento, sentimento.fk_usuario AS dono_do_sentimento
FROM memoria
JOIN usuario ON usuario.id_usuario = memoria.fk_usuario
JOIN sentimento ON sentimento.id_sentimento = memoria.fk_sentimento;

SELECT usuario.nome, memoria.titulo, memoria.data
FROM usuario
JOIN memoria ON usuario.id_usuario = memoria.fk_usuario;

SELECT memoria.titulo, sentimento.nome AS sentimento
FROM memoria
JOIN sentimento ON sentimento.id_sentimento = memoria.fk_sentimento;

SELECT memoria.titulo, colo.nome AS colo
FROM memoria
JOIN memoria_colo ON memoria.id_memoria = memoria_colo.fk_memoria
JOIN colo ON colo.id_colo = memoria_colo.fk_colo;

SELECT memoria.titulo, memoria.data
FROM memoria
JOIN memoria_colo ON memoria.id_memoria = memoria_colo.fk_memoria
JOIN colo ON colo.id_colo = memoria_colo.fk_colo
WHERE colo.nome = 'Mãe';

SELECT memoria.titulo, GROUP_CONCAT(colo.nome) AS colos
FROM memoria
JOIN memoria_colo ON memoria.id_memoria = memoria_colo.fk_memoria
JOIN colo ON colo.id_colo = memoria_colo.fk_colo
GROUP BY memoria.id_memoria, memoria.titulo;

SELECT colo.nome
FROM colo
LEFT JOIN memoria_colo ON colo.id_colo = memoria_colo.fk_colo
WHERE memoria_colo.fk_colo IS NULL;

SELECT sentimento.nome
FROM sentimento
LEFT JOIN memoria ON sentimento.id_sentimento = memoria.fk_sentimento
WHERE memoria.id_memoria IS NULL;


-- ===== INDICADORES DA DASHBOARD =====
SELECT sentimento.nome, COUNT(*) AS total
FROM sentimento
JOIN memoria ON sentimento.id_sentimento = memoria.fk_sentimento
WHERE memoria.fk_usuario = 1
GROUP BY sentimento.nome
ORDER BY total DESC;

SELECT colo.nome, COUNT(*) AS total
FROM colo
JOIN memoria_colo ON colo.id_colo = memoria_colo.fk_colo
JOIN memoria ON memoria.id_memoria = memoria_colo.fk_memoria
WHERE memoria.fk_usuario = 1
GROUP BY colo.nome
ORDER BY total DESC;

SELECT MONTH(data) AS mes, COUNT(*) AS total
FROM memoria
WHERE fk_usuario = 1
GROUP BY MONTH(data)
ORDER BY mes;

SELECT COUNT(*) AS total, MIN(data) AS primeira, MAX(data) AS ultima,
       DATEDIFF(CURDATE(), MAX(data)) AS dias
FROM memoria
WHERE fk_usuario = 1;

SELECT colo.nome AS colo, sentimento.nome AS sentimento, COUNT(*) AS total
FROM colo
JOIN memoria_colo ON colo.id_colo = memoria_colo.fk_colo
JOIN memoria ON memoria.id_memoria = memoria_colo.fk_memoria
JOIN sentimento ON sentimento.id_sentimento = memoria.fk_sentimento
WHERE memoria.fk_usuario = 1
GROUP BY colo.nome, sentimento.nome
ORDER BY colo.nome, total DESC;

SELECT memoria.*, sentimento.nome AS sentimento
FROM memoria
JOIN sentimento ON sentimento.id_sentimento = memoria.fk_sentimento
WHERE memoria.fk_usuario = 1
ORDER BY RAND()
LIMIT 1;