function calcular() {
    var preco_por_kg = parseFloat(document.getElementById("preco_por_kg").value);
    var consumo_em_gramas = parseFloat(document.getElementById("consumo_em_gramas").value);
    var consumo_em_kg = consumo_em_gramas / 1000;
    var valor_a_pagar = preco_por_kg * consumo_em_kg;
    document.getElementById("resultado").innerHTML = "O valor a ser pago é: R$ " + valor_a_pagar.toFixed(2);
}