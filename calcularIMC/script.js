function calcularIMC() {
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Insira informações válidas.");
        return;
    }

    let imc = peso / (altura * altura);
    let resultadoIMC = document.getElementById("resultadoIMC");
    let classificacaoIMC = document.getElementById("classificacaoIMC");

    resultadoIMC.textContent = "Resultado: " + imc.toFixed(2); 

    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso normal"; 
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso"; 
    } else {
        classificacao = "Obesidade";
    }
    classificacaoIMC.textContent = "Classificação: " + classificacao;
} 
