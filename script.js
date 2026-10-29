
"use strict";

// DATAFORMAT JS
// Tema 06 - Strings, Datas, Regex e Intl

// Função para exibir resultados na tela
function mostrarResultado(id, mensagem, sucesso) {
    const elemento = document.getElementById(id);

    elemento.textContent = mensagem;
    elemento.className = sucesso ? "sucesso" : "erro";
}

// 1. VALIDAÇÃO DE E-MAIL COM REGEX
function validarEmail() {
    const email = document.getElementById("email").value.trim();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
        mostrarResultado(
            "resultado-email",
            "✓ Formato de e-mail válido!",
            true
        );
    } else {
        mostrarResultado(
            "resultado-email",
            "✗ Formato de e-mail inválido!",
            false
        );
    }
}

// 2. VALIDAÇÃO DE TELEFONE COM REGEX
function validarTelefone() {
    const telefone = document.getElementById("telefone").value.trim();

    // Formato: (81) 99999-8888
    const regex = /^\([1-9]\d\) 9\d{4}-\d{4}$/;

    if (regex.test(telefone)) {
        mostrarResultado(
            "resultado-telefone",
            "✓ Formato de telefone válido!",
            true
        );
    } else {
        mostrarResultado(
            "resultado-telefone",
            "✗ Use o formato (81) 99999-8888",
            false
        );
    }
}

// 3. FORMATAÇÃO DE MOEDA COM INTL
function formatarMoeda() {
    const campo = document.getElementById("valor");
    const valor = Number(campo.value);

    if (campo.value.trim() === "" || !Number.isFinite(valor)) {
        mostrarResultado(
            "resultado-moeda",
            "✗ Digite um valor válido!",
            false
        );
        return;
    }

    const moeda = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    mostrarResultado(
        "resultado-moeda",
        "✓ Valor formatado: " + moeda.format(valor),
        true
    );
}

// 4. FORMATAÇÃO DE DATA COM INTL
function formatarData() {
    const valor = document.getElementById("data").value;

    if (!valor) {
        mostrarResultado(
            "resultado-data",
            "✗ Selecione uma data!",
            false
        );
        return;
    }

    const data = new Date(valor + "T12:00:00Z");

    const formatador = new Intl.DateTimeFormat("pt-BR", {
        timeZone: "UTC",
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    mostrarResultado(
        "resultado-data",
        "✓ Data formatada: " + formatador.format(data),
        true
    );
}

// CONEXÃO DOS BOTÕES COM AS FUNÇÕES
document.getElementById("btn-email")
    .addEventListener("click", validarEmail);

document.getElementById("btn-telefone")
    .addEventListener("click", validarTelefone);

document.getElementById("btn-moeda")
    .addEventListener("click", formatarMoeda);

document.getElementById("btn-data")
    .addEventListener("click", formatarData);
