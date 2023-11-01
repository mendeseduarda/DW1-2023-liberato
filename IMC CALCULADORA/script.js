document.getElementById("calcular").addEventListener("click", function () {
    var nome = document.getElementById("nome").value;
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    var imc = (peso / (altura * altura));

    var situacao = "";
    if (imc < 18.5) {
        situacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        situacao = "Peso normal";
    } else if (imc < 29.9) {
        situacao = "Sobrepeso";
    } else if (imc < 34.9) {
        situacao = "Obesidade grau I";
    } else if (imc < 39.9) {
        situacao = "Obesidade grau II";
    } else {
        situacao = "Obesidade grau III";
    }

    var resultado =  nome + "  seu IMC é " + imc.toFixed(2) + " <br> sua situação é " + situacao;
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<p>" + resultado + "</p>";
    resultadoDiv.classList.remove("hidden");
});
