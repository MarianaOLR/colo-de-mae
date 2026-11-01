<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:F4B6A6,100:CDBFE3&height=170&section=header&text=Colo%20de%20M%C3%A3e%20%F0%9F%8C%B7&fontSize=42&fontColor=5A3E3E&animation=fadeIn&fontAlignY=42" alt="Colo de Mãe" width="100%" />

<img src="https://readme-typing-svg.demolab.com?font=Poppins&size=20&pause=1200&color=C98A7A&center=true&vCenter=true&width=640&lines=Um+di%C3%A1rio+de+afeto+%F0%9F%8C%B7;M%C3%A3e+%C3%A9+amor+em+forma+de+gente;Projeto+Individual+%E2%80%94+SPTech+%F0%9F%92%8C" alt="Typing SVG" />

**Um diário para guardar os momentos em que a gente se sentiu cuidado**

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-F4B6A6)](#-andamento)
[![Curso](https://img.shields.io/badge/SPTech-ADS%20%7C%201ADSA-CDBFE3)](#)
[![Licença](https://img.shields.io/badge/licen%C3%A7a-acad%C3%AAmico-B7CDB0)](#)

</div>

<br>

## 💌 Sobre o projeto

Nem todo cuidado faz barulho. Às vezes ele vem em um café pronto, uma mensagem ou um abraço demorado.

O **Colo de Mãe** é um site-diário para guardar essas memórias e os sentimentos que elas despertam, especialmente os que têm cheirinho de mãe. Cada memória tem um **título**, uma **data**, a **descrição** do momento, uma **música**, uma **frase** que marcou, uma **foto** e um **sentimento** (Amor, Alegria, Gratidão ou Saudade).

Com os registros, o site mostra um **dashboard** com os sentimentos mais citados e as memórias ao longo do tempo, para a pessoa enxergar o que mais floresce na sua história.

> Porque lembrar também é uma forma de acolher.

<br>

## 🖼️ Como é

<div align="center">

<img src="docs/telas-finais/tela-home.png" alt="Home do Colo de Mãe" width="640" />

<sub>As outras telas (cadastro, login, diário e dashboard) estão em <a href="docs/telas-finais">docs/telas-finais</a>.</sub>

</div>

<br>

## ✨ O que o site faz

- 🌱 **Cadastro e login** — cada pessoa tem o seu cantinho.
- 📖 **Diário** — registrar e reler memórias, cada uma com música, frase, foto e sentimento.
- 📊 **Dashboard** — total de usuários, sentimento mais citado e memórias por mês.
- 🎨 **Sentimentos em cores** — Amor, Alegria, Gratidão e Saudade, cada um com a sua cor.

> [!NOTE]
> O projeto está **em desenvolvimento**. O que já está pronto e o que falta está na seção [Andamento](#-andamento).

<br>

## 🧩 Como as camadas conversam

```
 Navegador (HTML + CSS + JavaScript)
        │   requisições HTTP (fetch)
        ▼
 API Node.js  ───────►  Banco de dados MySQL
                         rodando em uma VM Linux
```

| Camada | O que faz |
|---|---|
| **Frontend** | Páginas, estilo e validação dos formulários |
| **Backend** | Recebe os dados do site, grava e consulta no banco |
| **Banco de dados** | Guarda usuários e memórias (um usuário tem várias memórias) |

<br>

## 🔗 Links do projeto

| | |
|---|---|
| 📄 Documentação do projeto | [documento-projeto.docx](docs/documento-projeto.docx) |
| 🗃️ Modelo lógico do banco | [modelo-logico.png](docs/modelo-logico.png) |
| 🧮 Scripts SQL | [banco/](banco/) |
| 🤖 Diário de prompts (uso de IA) | [diario-de-prompts.md](docs/diario-de-prompts.md) |
| 🗂️ Organização do projeto | [Trello](https://trello.com/b/nF6ukCsZ/colo-de-mae) |

<br>

## 🧪 Tecnologias

![HTML](https://img.shields.io/badge/HTML-B7CDB0?style=flat&logo=html5&logoColor=5A3E3E)
![CSS](https://img.shields.io/badge/CSS-F8E3A1?style=flat&logo=css3&logoColor=5A3E3E)
![JavaScript](https://img.shields.io/badge/JavaScript-CDBFE3?style=flat&logo=javascript&logoColor=5A3E3E)
![Node.js](https://img.shields.io/badge/Node.js-B7CDB0?style=flat&logo=nodedotjs&logoColor=5A3E3E)
![MySQL](https://img.shields.io/badge/Banco%20de%20Dados-MySQL-F4B6A6?style=flat&logo=mysql&logoColor=5A3E3E)
![Linux](https://img.shields.io/badge/VM-Linux-CDBFE3?style=flat&logo=linux&logoColor=5A3E3E)

<br>

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

<br>

## 🤖 Uso de IA

A IA foi usada só como apoio: tirar dúvidas, revisar e sugerir trechos. Tudo o que foi pedido, usado e modificado está registrado no [Diário de Prompts](docs/diario-de-prompts.md).

<br>

## 👩‍💻 Autora

**Mariana de Oliveira Soares** · 1ADSA · SPTech

<br>

<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:CDBFE3,100:F4B6A6&height=110&section=footer" alt="" width="100%" />
</div>
