-- Cada memória com os seus colos (n:n passando pela tabela do meio)
SELECT memoria.titulo, colo.nome AS colo
FROM memoria
JOIN memoria_colo ON memoria.id_memoria = memoria_colo.fk_memoria
JOIN colo ON colo.id_colo = memoria_colo.fk_colo;

-- Memórias em que a Mãe foi o colo
SELECT memoria.titulo, memoria.data
FROM memoria
JOIN memoria_colo ON memoria.id_memoria = memoria_colo.fk_memoria
JOIN colo ON colo.id_colo = memoria_colo.fk_colo
WHERE colo.nome = 'Mãe';

-- Quantas memórias cada colo acolheu (vai para o dashboard)
SELECT colo.nome, COUNT(*) AS total
FROM colo
JOIN memoria_colo ON colo.id_colo = memoria_colo.fk_colo
GROUP BY colo.nome
ORDER BY total DESC;

-- Quantas memórias por sentimento (vai para os indicadores)
SELECT sentimento, COUNT(*) AS total
FROM memoria
GROUP BY sentimento;

-- Colos que ainda não aparecem em nenhuma memória
SELECT colo.nome
FROM colo
LEFT JOIN memoria_colo ON colo.id_colo = memoria_colo.fk_colo
WHERE memoria_colo.fk_colo IS NULL;