# DataFormat JS

**Seminário Fullstack JavaScript — Tema 06**

Sistema web interativo para validação e formatação de dados utilizando JavaScript moderno, expressões regulares (Regex) e a API de internacionalização (Intl).

## Objetivo

Demonstrar como o JavaScript pode ser utilizado para manipular strings, validar padrões de entrada e formatar datas e valores monetários em aplicações web.

## Funcionalidades

- **Validação de e-mail:** verifica se o texto corresponde a um padrão básico de endereço eletrônico usando Regex.
- **Validação de telefone:** verifica o formato de celular brasileiro `(DD) 9XXXX-XXXX`.
- **Formatação de moeda:** converte números para a representação monetária brasileira com `Intl.NumberFormat`.
- **Formatação de data:** apresenta datas por extenso em português utilizando `Intl.DateTimeFormat`.

As validações verificam padrões de formato, não a existência real dos dados.

## Tecnologias utilizadas

- HTML5 — Estrutura da aplicação.
- CSS3 — Estilização e responsividade.
- JavaScript ES6+ — Lógica e interação com o usuário.
- Regex — Verificação de padrões em strings.
- Intl — Internacionalização de números e datas.

## Estrutura do projeto

```text
dataformat-js/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Como executar

1. Baixe ou clone o repositório.
2. Abra a pasta do projeto no VS Code.
3. Abra o arquivo `index.html` em um navegador.
4. Preencha os campos e clique nos botões para testar as funcionalidades.

Não é necessário instalar dependências ou configurar banco de dados.

## Exemplos de utilização

| Funcionalidade | Entrada | Resultado |
|---|---|---|
| E-mail | teste@gmail.com | Formato válido |
| E-mail | teste@gmail | Formato inválido |
| Telefone | (81) 99999-8888 | Formato válido |
| Telefone | 81999998888 | Formato inválido |
| Moeda | 1599.90 | R$ 1.599,90 |
| Data | 29/11/2026 | 29 de novembro de 2026 |

## Aplicações no mundo real

Esses recursos são utilizados em formulários de cadastro, sistemas de vendas, plataformas financeiras e aplicações que precisam apresentar dados conforme o idioma e a região do usuário.

## Autoria

Projeto desenvolvido individualmente para o Seminário Fullstack JavaScript — Tema 06.

**Instituição:** Faculdade Nova Roma

**Data da apresentação:** 29/11/2026