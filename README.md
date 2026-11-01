<div align="center">

<img src="docs/tela-home.png" alt="Home do Colo de Mãe" width="720">

# 🌷 Colo de Mãe

**Um diário de afeto.**
*“Mãe é amor em forma de gente.”*

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-F4B6A6?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML-B7CDB0?style=for-the-badge&logo=html5&logoColor=5A3E3E)
![CSS](https://img.shields.io/badge/CSS-F8E3A1?style=for-the-badge&logo=css3&logoColor=5A3E3E)
![JavaScript](https://img.shields.io/badge/JavaScript-CDBFE3?style=for-the-badge&logo=javascript&logoColor=5A3E3E)
![Node.js](https://img.shields.io/badge/Node.js-B7CDB0?style=for-the-badge&logo=nodedotjs&logoColor=5A3E3E)
![MySQL](https://img.shields.io/badge/MySQL-F4B6A6?style=for-the-badge&logo=mysql&logoColor=5A3E3E)

</div>

---

## 💌 Sobre o projeto

Nem todo cuidado faz barulho. Às vezes ele vem em um café pronto, uma mensagem ou um abraço demorado.

O **Colo de Mãe** é um site-diário para guardar os momentos em que a gente se sentiu cuidado e os sentimentos que eles despertam, especialmente os que têm cheirinho de mãe. Cada memória tem um título, uma data, a descrição do momento, uma música, uma frase que marcou, uma foto e um sentimento.

> Porque lembrar também é uma forma de acolher.

Este é o meu **Projeto Individual** do 1º semestre de Análise e Desenvolvimento de Sistemas na SPTech, e reúne o que aprendi em todas as disciplinas do semestre.

## ✨ O que o site faz

- 🌱 **Cadastro e login** de usuários
- 📖 **Diário:** registrar e reler memórias, cada uma com um sentimento (Amor, Alegria, Gratidão ou Saudade)
- 📊 **Dashboard** com indicadores: total de usuários, sentimento mais citado e memórias por mês

> 🚧 O projeto está em desenvolvimento. O que já está pronto e o que falta está na seção [Andamento](#-andamento).

## 🖼️ Telas

| Cadastro | Login |
|:---:|:---:|
| <img src="docs/tela-cadastro.png" width="360"> | <img src="docs/tela-login.png" width="360"> |

| Diário | Dashboard |
|:---:|:---:|
| <img src="docs/tela-diario.png" width="360"> | <img src="docs/tela-dashboard.png" width="360"> |

## 🧩 Como as camadas conversam

```
 Navegador (HTML + CSS + JavaScript)
        │   requisições HTTP (fetch)
        ▼
 API Node.js  ───────►  Banco de dados relacional (MySQL)
                         rodando em uma VM Linux
```

| Camada | O que faz | Tecnologia |
|---|---|---|
| **Frontend** | Páginas, estilo e validação dos formulários | HTML, CSS, JavaScript |
| **Backend** | Recebe os dados do site, grava e consulta no banco | Node.js |
| **Banco de dados** | Guarda usuários e memórias | MySQL em VM Linux |

## 🗃️ Modelo de dados

Um usuário pode ter várias memórias (relação **1:N**).

| usuario | | memoria | |
|---|---|---|---|
| id (PK) | | id (PK) | |
| nome | | titulo | |
| email | | data | |
| senha | | descricao | |
| | | musica | |
| | | frase | |
| | | sentimento | lista fechada: Amor, Alegria, Gratidão, Saudade |
| | | foto | link (URL) |
| | | fk_usuario (FK) | |

O modelo lógico está em [`docs/`](docs/) e os scripts SQL em [`banco/`](banco/):
`script.sql` cria as tabelas e os dados de exemplo, e `consultas.sql` traz as consultas dos indicadores do dashboard.

## 🎨 Identidade visual

Clean, com cores pastel e flores em traço fino, a meio caminho entre o jovial de quem é filho e o sério de quem é mãe.

| Cor | Código | Uso |
|---|---|---|
| 🟤 Marrom-vinho | `#5A3E3E` | textos |
| 🍑 Pêssego | `#F4B6A6` | botões e **Amor** |
| 🌿 Sálvia | `#B7CDB0` | **Gratidão** |
| 🌼 Amarelo | `#F8E3A1` | **Alegria** |
| 💜 Lilás | `#CDBFE3` | **Saudade** |
| 🤍 Creme | `#FFF8F0` | fundo |

Fontes: **Lora** nos títulos e **Poppins** no texto.

## 📁 Estrutura do repositório

```
colo-de-mae/
├── docs/     documento do projeto, modelo lógico, esboços das telas e diário de prompts
├── front/    páginas HTML, CSS e JavaScript
├── api/      API em Node.js
└── banco/    script.sql e consultas.sql
```

## 🗺️ Andamento

- [x] Tema e documento do projeto
- [x] Repositório no Git, backlog e quadro no Trello
- [x] Modelo lógico e script do banco
- [x] Consultas dos indicadores
- [x] Esboço das telas e identidade visual
- [ ] Página Home
- [ ] Telas de cadastro e login com validação em JavaScript
- [ ] API em Node.js conectada ao banco
- [ ] Banco na VM Linux
- [ ] Diário e dashboard funcionando
- [ ] Apresentação final

## 🤖 Uso de IA

A IA foi usada só como apoio: tirar dúvidas, revisar e sugerir trechos. Tudo o que foi pedido, usado e modificado está registrado em [`docs/diario-de-prompts.md`](docs/diario-de-prompts.md).

## 👩‍💻 Autora

**Mariana de Oliveira Soares** · 1ADSA · SPTech

<div align="center">

*Feito de afeto, para guardar afeto.* 🌷

</div>
