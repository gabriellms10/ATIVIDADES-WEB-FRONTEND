function cadastrar(){

let nome = document.getElementById("nome").value;
let idade = document.getElementById("idade").value;
let cidade = document.getElementById("cidade").value;

  
    if (nome === "" || idade === "" || cidade === "") {
          alert("Preencha todos os campos!");
      return;
     }


let tabela = document.getElementById("tabela");

let novoCampo = tabela.insertRow();

let campoNome = novoCampo.insertCell(0);
let campoIdade = novoCampo.insertCell(1);
let campoCidade = novoCampo.insertCell(2);

campoNome.innerText = nome;
campoIdade.innerText = idade;
campoCidade.innerText = cidade;

document.getElementById("nome").value = "";
document.getElementById("idade").value = "";
document.getElementById("cidade").value = "";




}