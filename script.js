$(document).ready(function(){
    $('#cep').mask('00000-000')
    $('#tel').mask('(00) 0 0000-0000');
    $('#cpf').mask('000.000.000-00', {reverse: true});
})
document.getElementById("meuFormulario").addEventListener("submit", function (event) {
    if (!this.checkValidity()) {
      event.preventDefault();
      alert("Por favor, preencha todos os campos obrigatórios.");
    } else {
      event.preventDefault();
      window.location.href = "Devolução.html";
    }
  });

