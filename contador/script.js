
      

       
        const LIMITE_MAXIMO = 200;

      
        const campoTexto = document.getElementById('campoTexto');
        const elementoContagem = document.getElementById('contagem');

        contar(); 
        campoTexto.addEventListener('input', contar);
      


       
        function contar() {
            const textoDigitado = campoTexto.value;
            let numCaracteres = textoDigitado.length;
            const palavras = textoDigitado.trim().split(/\s+/).filter(word => word.length > 0);
            const numPalavras = palavras.length;
            
          
            let caracteresRestantes = LIMITE_MAXIMO - numCaracteres;
            let classeAviso = '';
            
            if (numCaracteres > LIMITE_MAXIMO) {
                classeAviso = 'aviso-vermelho';
                campoTexto.value = textoDigitado.substring(0, LIMITE_MAXIMO);
                numCaracteres = LIMITE_MAXIMO;
                caracteresRestantes = 0;
            } else {
                 classeAviso = '';
            }

            elementoContagem.className = 'contador ' + classeAviso; 
            
            
            elementoContagem.innerHTML = 
                `Caracteres: ${numCaracteres} | Palavras: ${numPalavras} | Restantes: ${caracteresRestantes}/${LIMITE_MAXIMO}`;
        }
