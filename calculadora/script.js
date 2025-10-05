
function calcular() {
    
    const n1 = parseFloat(document.getElementById ("n1").value)
     const n2 = parseFloat(document.getElementById("n2").value)
     const caso  = document.getElementById("caso").value

     let result;

     switch (caso) {
        case "soma":
           result =  n1 + n2;
            break;
        case "sub":
          result = n1 - n2
            break;
        case "div":
            result = n1 / n2   
            break;
        case "mult":
            result = n1 * n2
            break;
        default:
            break;        
     }

     document.getElementById("resultadu").textContent = "resultado: " + result;
    
}