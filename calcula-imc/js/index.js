$(function() {
  $("button").on("click", function() {
    let height = $("#height").val();
    let weight = $("#weight").val();

    height = height.replace(",", ".");
    weight = weight.replace(",", ".");

    let imc = weight / (height * height);

    if (imc < 16) {
      level = "Seu peso está muito a baixo do recomendado.";
    } else if (imc >= 16 && imc < 16.99) {
      level = "Seu peso está a baixo do recomendado.";
    } else if (imc >= 17 && imc < 18.49) {
      level = "Seu peso está baixo";
    } else if (imc >= 18.5 && imc < 24.99) {
      level = "Peso Normal";
    } else if (imc >= 25 && imc < 29.99) {
      level = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.99) {
      level = "Obesidade Grau I";
    } else if (imc >= 35 && imc < 39.99) {
      level = "Obesidade Grau II";
    } else if (imc >= 40) {
      level = "Obesidade Grau III";
    }

    $("#result").html(`Seu IMC é: ${imc} kg/m² </br></br> status é: ${level}`);
  });
});
