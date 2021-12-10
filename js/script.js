document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if (document.getElementById("nome").value != "" &&
      document.getElementById  ("email").value != "" &&
      document.getElementById("telefone").value != ""){
    alert("Prontinho! Você receberá as novidades por e-mail. 🤩")
  }else{
    alert("Por favor, preencha os campos corretamente. 🧐")
  }
}