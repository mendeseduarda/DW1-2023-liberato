function calcularTerreno() {
    const largura = parseFloat(document.getElementById("largura").value);
    const comprimento = parseFloat(document.getElementById("comprimento").value);
    const valorMetroQuadrado = parseFloat(document.getElementById("valorMetroQuadrado").value);

    const area = largura * comprimento;
    const preco = area * valorMetroQuadrado;

    document.getElementById("resultadoArea").textContent = area.toFixed(2);
    document.getElementById("resultadoPreco").textContent = preco.toFixed(2);
}

document.getElementById("calcularBtn").addEventListener("click", calcularTerreno);
