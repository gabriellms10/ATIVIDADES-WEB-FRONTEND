function adicionar() {
    const input = document.getElementById("campotarefa");
    const lista = document.getElementById("listatarefa");
    const item = document.createElement("li")
   
    const botaoRemover = document.createElement("button")
    botaoRemover.textContent = "Remover";
    botaoRemover.onclick = function (){
        lista.removeChild(item);
    }
     item.textContent = input.value;
    item.appendChild(botaoRemover);
    lista.appendChild(item);
   
  



}