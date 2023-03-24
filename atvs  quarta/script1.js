function converterDuracao() {
    let titulo = document.getElementById("titulo").value;
    let duracao = parseInt(document.getElementById("duracao").value);

    let duracao_horas = Math.floor(duracao / 60);
    let duracao_minutos = duracao % 60;

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O filme "${titulo}" tem duração de ${duracao_horas} hora(s) e ${duracao_minutos} minuto(s).`;
    resultado.style.display = "block";
}