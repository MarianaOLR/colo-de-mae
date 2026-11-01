USE colo_de_mae;

SELECT titulo, sentimento FROM memoria WHERE sentimento = 'Amor';
SELECT titulo, sentimento FROM memoria WHERE sentimento = 'Alegria';
SELECT titulo, sentimento FROM memoria WHERE sentimento = 'Gratidão';
SELECT titulo, sentimento FROM memoria WHERE sentimento = 'Saudade';

SELECT titulo, data FROM memoria WHERE data BETWEEN '2026-05-01' AND '2026-05-31';
SELECT titulo, data FROM memoria WHERE data BETWEEN '2025-12-01' AND '2025-12-31';
SELECT titulo, data FROM memoria WHERE data BETWEEN '2026-06-01' AND '2026-06-30';