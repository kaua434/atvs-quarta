function calcular() {
    var modelo = document.getElementById("modelo").value;
    var preco = document.getElementById("preco").value;

    if (!modelo || !preco) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    preco = parseFloat(preco);
    if (isNaN(preco)) {
        alert("Por favor, informe um preço válido.");
        return;
    }

    var entrada = preco * 0.5;
    var saldo = preco * 0.5 / 12;

    var resultDiv = document.querySelector(".result");
    resultDiv.innerHTML = `
        <p>Modelo: ${modelo}</p>
        <p>Preço: R$ ${preco.toFixed(2)}</p>
        <p>Entrada (50%): R$ ${entrada.toFixed(2)}</p>
        <p>Saldo em 12x: R$ ${saldo.toFixed(2)}</p>
    `;
}