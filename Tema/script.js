function alterar(){
let pagina = document.body;

pagina.classList.toggle("escuro");
let img = document.getElementById("img");

if (pagina.classList.contains("escuro")) {
    img.src = "imagens/lua.jpg";
 
}else{
    img.src = "imagens/sol.png";
   
}

}


           