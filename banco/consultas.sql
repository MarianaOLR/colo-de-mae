USE colo_de_mae;

-- ===== CONSULTAS SIMPLES =====

SELECT * FROM usuario;
SELECT * FROM memoria;
SELECT * FROM colo;
SELECT * FROM sentimento;
SELECT * FROM memoria_colo;
SELECT * FROM memoria_sentimento;

-- Colos padrão (sem dono) e colos criados por um usuário
SELECT * FROM colo WHERE fk_usuario IS NULL;
SELECT * FROM colo WHERE fk_usuario = 2;

-- Cada usuário com as suas memórias (1:n)
SELECT usuario.nome, memoria.titulo, memoria.data
FROM usuario
JOIN memoria ON usuario.id_usuario = memoria.fk_usuario;

-- Cada memória com os seus colos (n:n passando pela tabela do meio)
SELECT memoria.titulo, colo.nome AS colo
FROM memoria
JOIN memoria_colo ON memoria.id_memoria = memoria_colo.fk_memoria
JOIN colo ON colo.id_colo = memoria_colo.fk_colo;

-- Cada memória com os seus sentimentos (n:n passando pela tabela do meio)
SELECT memoria.titulo, sentimento.nome AS sentimento
FROM memoria
JOIN memoria_sentimento ON memoria.id_memoria = memoria_sentimento.fk_memoria
JOIN sentimento ON sentimento.id_sentimento = memoria_sentimento.fk_sentimento;

-- Memórias em que a Mãe foi o colo
SELECT memoria.titulo, memoria.data
FROM memoria
JOIN memoria_colo ON memoria.id_memoria = memoria_colo.fk_memoria
JOIN colo ON colo.id_colo = memoria_colo.fk_colo
WHERE colo.nome = 'Mãe';

-- Cada memória com todos os sentimentos juntos numa linha só
SELECT memoria.titulo, GROUP_CONCAT(sentimento.nome) AS sentimentos
FROM memoria
JOIN memoria_sentimento ON memoria.id_memoria = memoria_sentimento.fk_memoria
JOIN sentimento ON sentimento.id_sentimento = memoria_sentimento.fk_sentimento
GROUP BY memoria.id_memoria, memoria.titulo;

-- Colos que ainda não aparecem em nenhuma memória
SELECT colo.nome
FROM colo
LEFT JOIN memoria_colo ON colo.id_colo = memoria_colo.fk_colo
WHERE memoria_colo.fk_colo IS NULL;

-- Sentimentos que ainda não aparecem em nenhuma memória
SELECT sentimento.nome
FROM sentimento
LEFT JOIN memoria_sentimento ON sentimento.id_sentimento = memoria_sentimento.fk_sentimento
WHERE memoria_sentimento.fk_sentimento IS NULL;

-- ===== INDICADORES DA DASHBOARD (usuário 2) =====

-- Sentimentos mais citados
SELECT sentimento.nome, COUNT(*) AS total
FROM sentimento
JOIN memoria_sentimento ON sentimento.id_sentimento = memoria_sentimento.fk_sentimento
JOIN memoria ON memoria.id_memoria = memoria_sentimento.fk_memoria
WHERE memoria.fk_usuario = 2
GROUP BY sentimento.nome
ORDER BY total DESC;

-- Quantas memórias cada colo acolheu
SELECT colo.nome, COUNT(*) AS total
FROM colo
JOIN memoria_colo ON colo.id_colo = memoria_colo.fk_colo
JOIN memoria ON memoria.id_memoria = memoria_colo.fk_memoria
WHERE memoria.fk_usuario = 2
GROUP BY colo.nome
ORDER BY total DESC;

-- Memórias por mês
SELECT MONTH(data) AS mes, COUNT(*) AS total
FROM memoria
WHERE fk_usuario = 2
GROUP BY MONTH(data)
ORDER BY mes;

-- Resumo: total, primeira, última e quantos dias desde a última
SELECT COUNT(*) AS total, MIN(data) AS primeira, MAX(data) AS ultima,
       DATEDIFF(CURDATE(), MAX(data)) AS dias
FROM memoria
WHERE fk_usuario = 2;

-- O que cada colo desperta (sentimento que cada pessoa mais traz)
SELECT colo.nome AS colo, sentimento.nome AS sentimento, COUNT(*) AS total
FROM colo
JOIN memoria_colo ON colo.id_colo = memoria_colo.fk_colo
JOIN memoria ON memoria.id_memoria = memoria_colo.fk_memoria
JOIN memoria_sentimento ON memoria.id_memoria = memoria_sentimento.fk_memoria
JOIN sentimento ON sentimento.id_sentimento = memoria_sentimento.fk_sentimento
WHERE memoria.fk_usuario = 2
GROUP BY colo.nome, sentimento.nome
ORDER BY colo.nome, total DESC;

-- Uma memória sorteada para reler
SELECT * FROM memoria
WHERE fk_usuario = 2
ORDER BY RAND()
LIMIT 1;