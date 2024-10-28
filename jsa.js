	
	
	
			
			
			
	const phrases = [
          
		" Açaí da Terra",
            " O  melhor Açaí",
            " Venha provar!"
        ];  //ARRAY COM AS PALVRAS QUE QUERO 
        
		
		const colors = ["purple","black","red"]; // Cor correspondente a cada frase
		   const fonts = ["Arial, sans-serif", "Courier New, monospace", "Arial, sans-serif"];


        let index = 0;
        
        function changeText(){
		
			    const dotElement = document.getElementById('dot'); // Bolinha

            const textElement = document.getElementById('text');
			        dotElement.style.backgroundColor = colors[index]; // Muda a cor da bolinha

            textElement.style.opacity = 0; // Desaparece

            setTimeout(() => {
                textElement.textContent = phrases[index]; // Troca a frase
				textElement.style.color = colors[index]
				textElement.style.fontFamily = fonts[index];
textElement.style.textShadow = "2px 2px 8px rgba(0, 0, 0, 0.2)";

                textElement.style.opacity = 1; // Aparece
                index = (index + 1) % phrases.length; // Atualiza o índice
            }, 500); // Tempo de espera antes da mudança



            setTimeout(changeText, 2000); // Tempo entre as mudanças
        }

        changeText(); // Inicia o rotator