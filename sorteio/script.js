   // JavaScript para a lógica de sorteio
        
        // Pega os elementos do HTML que serão usados
        const formulario = document.getElementById('formularioSorteio');
        const inputQuantidade = document.getElementById('quantidade');
        const inputMinimo = document.getElementById('minimo');
        const inputMaximo = document.getElementById('maximo');
        const resultadoDiv = document.getElementById('resultado');

 
        formulario.addEventListener('submit', iniciarSorteio);

      function iniciarSorteio(event) {
   
            event.preventDefault(); 
    
            const quantidade = parseInt(inputQuantidade.value);
            const minimo = parseInt(inputMinimo.value);
            const maximo = parseInt(inputMaximo.value);
       
            if (maximo <= minimo) {
                resultadoDiv.innerHTML = '<p class="aviso">Erro: O valor Máximo deve ser maior que o Mínimo.</p>';
                return; 
            }
         
            const totalPossivel = maximo - minimo + 1; 
      
            if (quantidade > totalPossivel) {
                resultadoDiv.innerHTML = `<p class="aviso">Erro: A Quantidade (${quantidade}) excede o total de números possíveis no intervalo [${minimo} - ${maximo}] (${totalPossivel}).</p>`;
                return; 
            }

            const numerosSorteados = sortearUnicos(quantidade, minimo, maximo);

            resultadoDiv.innerHTML = `
                <p><strong>Números sorteados:</strong></p>
                <p>${numerosSorteados.join(', ')}</p> 
            `;
        }

        function sortearUnicos(qtd, min, max) {

            const numerosSet = new Set(); 

            while (numerosSet.size < qtd) {

                const novoNumero = gerarNumeroAleatorio(min, max);
                numerosSet.add(novoNumero); 
            }
            
            return Array.from(numerosSet);
        }

       function gerarNumeroAleatorio(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }